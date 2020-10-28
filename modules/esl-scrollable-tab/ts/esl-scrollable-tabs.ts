import {ExportNs} from '../../esl-utils/enviroment/export-ns';
import {attr} from '../../esl-base-element/ts/decorators/attr';
import {rafDecorator} from '../../esl-utils/async/raf';
import ESLTabsContainer from '../../esl-tab/ts/esl-tabs-container';
import ESLTab from '../../esl-tab/ts/esl-tab';
import {isNegativeScroll, isRtl} from '../../esl-utils/dom/rtl';

@ExportNs('ScrollableTabs')
export class ESLScrollableTabs extends ESLTabsContainer {
  public static is = 'esl-scrollable-tabs';
  public static eventNs = 'esl:sc-tabs';

  @attr({defaultValue: '.esl-tab-list'}) public tabList: string;

  // TODO: think about update of arrows
  protected connectedCallback() {
    super.connectedCallback();
    this.updateArrows();
    this.fitToViewport(this.current() as ESLTab, 'auto');
  }

  protected bindEvents() {
    super.bindEvents();
    this.addEventListener('click', this.onClick, false);
    this.$list && this.$list.addEventListener('scroll', this.onScroll, {passive: true});
    this.addEventListener('focusin', this.onFocus);
    window.addEventListener('resize', this.onResize);
  }

  protected unbindEvents() {
    super.unbindEvents();
    this.removeEventListener('click', this.onClick, false);
    this.$list && this.$list.removeEventListener('scroll', this.onScroll);
    this.removeEventListener('focusin', this.onFocus);
    window.removeEventListener('resize', this.onResize);
  }

  get $list(): HTMLElement | null {
    return this.querySelector(this.tabList);
  }

  public moveTo(direction: string, behavior: ScrollBehavior = 'smooth') {
    const list = this.$list;
    if (!list) return;
    let left = list.offsetWidth + 1;
    left = isRtl(this) ? -left : left;
    left = direction === 'left' ? -left : left;

    list.scrollBy({left, behavior});
  }

  protected fitToViewport(trigger: ESLTab | undefined, behavior: ScrollBehavior = 'smooth'): void {
    if (!trigger) return;

    const list = this.$list;
    if (!list) return;

    const scrollLeft = list.scrollLeft;
    const listWidth = list.offsetWidth;
    const left = trigger.offsetLeft;
    const width = trigger.offsetWidth;

    let shiftLeft = 0;

    if (Math.abs(left - scrollLeft + width) > listWidth) {
      shiftLeft = (listWidth - (left + width)) * -1 - scrollLeft;
    } else if (scrollLeft > left) {
      shiftLeft = (scrollLeft - left) * -1;
    }

    list.scrollBy({
      left: shiftLeft,
      behavior
    });

    this.updateArrows();
  }

  protected updateArrows() {
    const list = this.$list;
    if (!list) return;

    const hasScroll = list.scrollWidth > this.clientWidth;
    const scrollStart = Math.abs(list.scrollLeft) > 1;
    const scrollEnd = Math.abs(list.scrollLeft) + list.clientWidth + 1 < list.scrollWidth;

    const swapChecks = isRtl(this) && !isNegativeScroll();
    const hasScrollBefore = swapChecks ? scrollEnd : scrollStart;
    const hasScrollAfter = swapChecks ? scrollStart : scrollEnd;

    const rightArrow = this.querySelector('[data-tab-direction="right"]');
    const leftArrow = this.querySelector('[data-tab-direction="left"]');

    this.toggleAttribute('has-scroll', hasScroll);
    leftArrow && leftArrow.toggleAttribute('disabled', !hasScrollBefore);
    rightArrow && rightArrow.toggleAttribute('disabled', !hasScrollAfter);
  }

  protected onClick = (event: Event) => {
    const eventTarget: HTMLElement = event.target as HTMLElement;
    const target: HTMLElement | null = eventTarget.closest('[data-tab-direction]');
    const direction = target && target.dataset.tabDirection;

    if (!direction) return;
    this.moveTo(direction);
  };

  protected onTriggerStateChange(event: CustomEvent) {
    super.onTriggerStateChange(event);
    this.fitToViewport(this.current() as ESLTab);
  }

  protected onScroll = rafDecorator(() => this.updateArrows());

  protected onFocus = (e: FocusEvent) => {
    const target = e.target;
    if (target instanceof ESLTab) {
      this.fitToViewport(target);
    }
  };

  protected onResize = rafDecorator(() => {
    this.fitToViewport(this.current() as ESLTab, 'auto');
  });
}

export default ESLScrollableTabs;