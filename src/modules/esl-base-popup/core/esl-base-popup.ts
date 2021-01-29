import {ExportNs} from '../../esl-utils/environment/export-ns';
import {ESC} from '../../esl-utils/dom/keycodes';
import {CSSUtil} from '../../esl-utils/dom/styles';
import {bind} from '../../esl-utils/decorators/bind';
import {defined} from '../../esl-utils/misc/object';
import {DeviceDetector} from '../../esl-utils/environment/device-detector';
import {DelayedTask} from '../../esl-utils/async/delayed-task';
import {ESLBaseElement, attr, jsonAttr, boolAttr} from '../../esl-base-element/core';


export interface PopupActionParams {
  initiator?: string;
  delay?: number;
  showDelay?: number;
  hideDelay?: number;
  force?: boolean;
  silent?: boolean;
  trackHover?: boolean;
  trigger?: HTMLElement;
}

@ExportNs('BasePopup')
export class ESLBasePopup extends ESLBaseElement {
  static get observedAttributes() {
    return ['open', 'group'];
  }

  protected _open: boolean = false;
  protected _trackHover: boolean = false;
  protected _task: DelayedTask = new DelayedTask();

  @boolAttr() public open: boolean;

  @attr() public bodyClass: string;
  @attr() public activeClass: string;

  @attr({name: 'group'}) public groupName: string;
  @attr({name: 'close-on'}) public closeTrigger: string;

  @boolAttr() public closeOnEsc: boolean;
  @boolAttr() public closeOnOutsideAction: boolean;

  @jsonAttr<PopupActionParams>({defaultValue: {silent: false, force: true, initiator: 'init'}})
  public initialParams: PopupActionParams;
  @jsonAttr<PopupActionParams>({defaultValue: {}})
  public defaultParams: PopupActionParams;

  protected attributeChangedCallback(attrName: string, oldVal: string, newVal: string) {
    if (!this.connected || newVal === oldVal) return;
    switch (attrName) {
      case 'open':
        this.toggle(this.open, Object.assign({initiator: 'attribute'}, this.defaultParams));
        break;
      case 'group':
        this.$$fire('change:group',  {
          bubbles: true,
          composed: true,
          cancelable: true,
          detail: {oldGroupName: oldVal, newGroupName: newVal}
        });
        break;
    }
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.bindEvents();
    this.setInitialState();
  }

  protected disconnectedCallback() {
    super.disconnectedCallback();
    this.unbindEvents();
  }

  protected setInitialState() {
    if (!this.initialParams) return;
    this.toggle(this.open, this.initialParams);
  }

  protected bindEvents() {
    this.addEventListener('click', this._onClick);
    this.addEventListener('keydown', this._onKeyboardEvent);
  }

  protected unbindEvents() {
    this.removeEventListener('click', this._onClick);
    this.removeEventListener('keydown', this._onKeyboardEvent);
    this.bindOutsideEventTracking(false);
    this.bindHoverStateTracking(false);
  }

  protected bindOutsideEventTracking(track: boolean) {
    document.body.removeEventListener('mouseup', this._onOutsideAction);
    document.body.removeEventListener('touchend', this._onOutsideAction);
    if (track) {
      document.body.addEventListener('mouseup', this._onOutsideAction, true);
      document.body.addEventListener('touchend', this._onOutsideAction, true);
    }
  }
  protected bindHoverStateTracking(track: boolean) {
    if (DeviceDetector.isTouchDevice) return;
    if (this._trackHover === track) return;
    this._trackHover = track;

    this.removeEventListener('mouseenter', this._onMouseEnter);
    this.removeEventListener('mouseleave', this._onMouseLeave);
    if (this._trackHover) {
      this.addEventListener('mouseenter', this._onMouseEnter);
      this.addEventListener('mouseleave', this._onMouseLeave);
    }
  }

  protected mergeDefaultParams(params?: PopupActionParams): PopupActionParams {
    return Object.assign({}, this.defaultParams, params || {});
  }

  /**
   * Toggle popup state
   */
  public toggle(state: boolean = !this.open, params?: PopupActionParams) {
    return state ? this.show(params) : this.hide(params);
  }

  /**
   * Changes popup state to active
   */
  public show(params?: PopupActionParams) {
    params = this.mergeDefaultParams(params);
    this.planShowTask(params);
    this.bindOutsideEventTracking(this.closeOnOutsideAction);
    this.bindHoverStateTracking(!!params.trackHover);
    return this;
  }
  private planShowTask(params: PopupActionParams) {
    this._task.put(() => {
      if (!params.force && this._open) return;
      if (!params.silent && !this.$$fire('before:show')) return;
      this.onShow(params);
      if (!params.silent && !this.$$fire('show')) return;
    }, defined(params.showDelay, params.delay));
  }

  /**
   * Changes popup state to inactive
   */
  public hide(params?: PopupActionParams) {
    params = this.mergeDefaultParams(params);
    this.planHideTask(params);
    this.bindOutsideEventTracking(false);
    this.bindHoverStateTracking(!!params.trackHover);
    return this;
  }
  private planHideTask(params: PopupActionParams) {
    this._task.put(() => {
      if (!params.force && !this._open) return;
      if (!params.silent && !this.$$fire('before:hide')) return;
      this.onHide(params);
      if (!params.silent && !this.$$fire('hide')) return;
    }, defined(params.hideDelay, params.delay));
  }

  /**
   * Returns element to apply a11y attributes
   */
  protected get a11yTarget() {
    const target = this.getAttribute('a11y-target');
    if (target === 'none') return;
    return target ? this.querySelector(target) : this;
  }

  /**
   * Called on show and on hide actions to update a11y state accordingly
   */
  protected updateA11y() {
    const targetEl = this.a11yTarget;
    if (!targetEl) return;
    targetEl.setAttribute('aria-hidden', String(!this._open));
  }

  /**
   * Action to show popup
   */
  protected onShow(params: PopupActionParams) {
    this.open = this._open = true;
    CSSUtil.addCls(this, this.activeClass);
    CSSUtil.addCls(document.body, this.bodyClass);
    this.updateA11y();
    this.$$fire('esl:refresh');
  }

  /**
   * Action to hide popup
   */
  protected onHide(params: PopupActionParams) {
    this.open = this._open = false;
    CSSUtil.removeCls(this, this.activeClass);
    CSSUtil.removeCls(document.body, this.bodyClass);
    this.updateA11y();
  }

  // "Private" Handlers
  @bind
  protected _onClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (this.closeTrigger && target.closest(this.closeTrigger)) {
      this.hide({initiator: 'close', trigger: target});
    }
  }
  @bind
  protected _onOutsideAction(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (!this.contains(target)) {
      this.hide({initiator: 'outsideclick', trigger: target});
    }
  }

  @bind
  protected _onKeyboardEvent(e: KeyboardEvent) {
    if (this.closeOnEsc && e.which === ESC) {
      this.hide({initiator: 'keyboard'});
    }
  }

  @bind
  protected _onMouseEnter() {
    this.show({initiator: 'mouseenter', trackHover: true});
  }
  @bind
  protected _onMouseLeave() {
    this.hide({initiator: 'mouseleave', trackHover: true});
  }
}
