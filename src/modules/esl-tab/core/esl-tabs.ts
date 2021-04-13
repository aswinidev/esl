import {ExportNs} from '../../esl-utils/environment/export-ns';
import {ESLBaseElement, attr} from '../../esl-base-element/core';
import {rafDecorator} from '../../esl-utils/async/raf';
import {bind} from '../../esl-utils/decorators/bind';
import {ESLTab} from './esl-tab';
import {RTLUtils} from '../../esl-utils/dom/rtl';
import {debounce} from '../../esl-utils/async/debounce';

/**
 * ESlTabs component
 * @author Julia Murashko
 *
 * Tabs container component for Tabs trigger group.
 * Uses {@link ESLTab} as an item.
 * Each individual {@link ESLTab} can control {@link ESLToggleable} or, usually, {@link ESLPanel}
 */
@ExportNs('Tabs')
export class ESLTabs extends ESLBaseElement {
  public static is = 'esl-tabs';

  /** Scrollable mode.
   * The following values are supported:
   * - 'none' or not defined -  scroll behavior is disabled;
   * - 'centered' - scroll behavior is enabled, tab is center-aligned;
   * - empty or unsupported value - scroll behavior is enabled, tab is side-aligned;
   */
  @attr({defaultValue: 'none'}) public scrollable: string;

  /** Inner element to contain {@link ESLTab} collection. Will be scrolled in a scrollable mode */
  @attr({defaultValue: '.esl-tab-container'}) public scrollableTarget: string;

  protected connectedCallback() {
    super.connectedCallback();

    if (this.isScrollable) {
      this.bindScrollableEvents();
      this.updateScroll();
    }
  }

  protected disconnectedCallback() {
    super.disconnectedCallback();
    this.unbindScrollableEvents();
  }

  protected bindScrollableEvents() {
    this.addEventListener('esl:change:active', this._onTriggerStateChange);
    this.addEventListener('click', this._onClick, false);
    this.addEventListener('focusin', this._onFocus);
    this.$scrollableTarget?.addEventListener('scroll', this._onScroll, {passive: true});

    window.addEventListener('resize', this._onResize);
  }
  protected unbindScrollableEvents() {
    this.removeEventListener('esl:change:active', this._onTriggerStateChange);
    this.removeEventListener('click', this._onClick, false);
    this.removeEventListener('focusin', this._onFocus);
    this.$scrollableTarget?.removeEventListener('scroll', this._onScroll);

    window.removeEventListener('resize', this._onResize);
  }

  protected updateScroll() {
    this.updateArrows();
    this._deferredFitToViewport(this.$current, 'auto');
  }

  /** Collection of inner {@link ESLTab} items */
  public get $tabs(): ESLTab[] {
    const els = this.querySelectorAll(ESLTab.is);
    return els ? Array.from(els) as ESLTab[] : [];
  }

  /** Active {@link ESLTab} item */
  public get $current(): ESLTab | null {
    return this.$tabs.find((el) => el.active) || null;
  }

  /** Container element to scroll */
  public get $scrollableTarget(): HTMLElement | null {
    return this.querySelector(this.scrollableTarget);
  }

  /** Is the scrollable mode enabled ? */
  public get isScrollable(): boolean {
    return this.scrollable !== 'none';
  }

  /** Move scroll to the next/previous item */
  public moveTo(direction: string, behavior: ScrollBehavior = 'smooth') {
    const $scrollableTarget = this.$scrollableTarget;
    if (!$scrollableTarget) return;
    let left = $scrollableTarget.offsetWidth;
    left = RTLUtils.isRtl(this) && RTLUtils.scrollType !== 'reverse' ? -left : left;
    left = direction === 'left' ? -left : left;

    $scrollableTarget.scrollBy({left, behavior});
  }

  /** Scroll tab to the view */
  protected fitToViewport($trigger?: ESLTab, behavior: ScrollBehavior = 'smooth'): void {
    const $scrollableTarget = this.$scrollableTarget;
    if (!$scrollableTarget || !$trigger) return;

    const areaRect = $scrollableTarget.getBoundingClientRect();
    const itemRect = $trigger.getBoundingClientRect();

    $scrollableTarget.scrollBy({
      left: this.calcScrollOffset(itemRect, areaRect),
      behavior
    });

    this.updateArrows();
  }

  /** Get scroll offset position from the selected item rectangle */
  protected calcScrollOffset(itemRect: DOMRect, areaRect: DOMRect) {
    const isReversedRTL = RTLUtils.isRtl(this) && RTLUtils.scrollType === 'reverse';

    if (this.scrollable === 'center') {
      const shift = itemRect.left + itemRect.width / 2 - (areaRect.left + areaRect.width / 2);
      return isReversedRTL ? -shift : shift;
    }

    // item is out of area from the right side
    // else item out is of area from the left side
    if (itemRect.right > areaRect.right) {
      return isReversedRTL ? Math.floor(areaRect.right - itemRect.right) : Math.ceil(itemRect.right - areaRect.right);
    } else if (itemRect.left < areaRect.left) {
      return isReversedRTL ? Math.ceil(areaRect.left - itemRect.left) : Math.floor(itemRect.left - areaRect.left);
    }
  }

  protected updateArrows() {
    const $scrollableTarget = this.$scrollableTarget;
    if (!$scrollableTarget) return;

    const hasScroll = $scrollableTarget.scrollWidth > this.clientWidth;
    const swapSides = RTLUtils.isRtl(this) && RTLUtils.scrollType === 'default';
    const scrollStart = Math.abs($scrollableTarget.scrollLeft) > 1;
    const scrollEnd = Math.abs($scrollableTarget.scrollLeft) + $scrollableTarget.clientWidth + 1 < $scrollableTarget.scrollWidth;

    const $rightArrow = this.querySelector('[data-tab-direction="right"]');
    const $leftArrow = this.querySelector('[data-tab-direction="left"]');

    this.toggleAttribute('has-scroll', hasScroll);
    $leftArrow && $leftArrow.toggleAttribute('disabled', !(swapSides ? scrollEnd : scrollStart));
    $rightArrow && $rightArrow.toggleAttribute('disabled', !(swapSides ? scrollStart : scrollEnd));
  }

  protected _deferredUpdateArrows = debounce(this.updateArrows.bind(this), 100);
  protected _deferredFitToViewport = debounce(this.fitToViewport.bind(this), 100);

  @bind
  protected _onTriggerStateChange() {
    this._deferredFitToViewport(this.$current);
  }

  @bind
  protected _onClick(event: Event) {
    const eventTarget: HTMLElement = event.target as HTMLElement;
    const target: HTMLElement | null = eventTarget.closest('[data-tab-direction]');
    const direction = target && target.dataset.tabDirection;

    if (!direction) return;
    this.moveTo(direction);
  }

  @bind
  protected _onFocus(e: FocusEvent) {
    const target = e.target;
    if (target instanceof ESLTab) this._deferredFitToViewport(target);
  }

  @bind
  protected _onScroll() {
    this._deferredUpdateArrows();
  }

  // TODO: is the raf decorator needed?
  protected _onResize = rafDecorator(() => {
    this._deferredFitToViewport(this.$current, 'auto');
  });
}
