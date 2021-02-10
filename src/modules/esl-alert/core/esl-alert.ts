import {ExportNs} from '../../esl-utils/environment/export-ns';
import {bind} from '../../esl-utils/decorators/bind';
import {jsonAttr} from '../../esl-base-element/core';
import {ESLBasePopup, PopupActionParams} from '../../esl-base-popup/core';
import {DeviceDetector} from '../../esl-utils/environment/device-detector';
import {CSSUtil} from '../../esl-utils/dom/styles';
import {createZIndexIframe} from '../../esl-utils/fixes/ie-fixes';

export interface AlertActionParams extends PopupActionParams {
  /** text to be shown; pass empty string or null to hide */
  text?: string;
  /** html content */
  html?: string;
  /** classes to add to alert element */
  cls?: string;
}

@ExportNs('Alert')
export class ESLAlert extends ESLBasePopup {
  static is = 'esl-alert';
  static eventNs = 'esl:alert';

  static defaultConfig: AlertActionParams = {
    hideDelay: 2500
  };

  @jsonAttr<AlertActionParams>({defaultValue: ESLAlert.defaultConfig})
  public defaultParams: AlertActionParams;

  protected $text: HTMLElement;

  /** Register and create global alert instance */
  public static init() {
    if (document.querySelector(ESLAlert.is)) return;
    ESLAlert.register();
    const alert = document.createElement(ESLAlert.is) as ESLAlert;
    document.body.appendChild(alert);
  }

  /** Global event handler */
  @bind
  onWindowEvent(e: CustomEvent) {
    if (e.type === `${ESLAlert.eventNs}:show`) {
      const params = Object.assign({}, e.detail, {force: true});
      this.show(params);
    }
    if (e.type === `${ESLAlert.eventNs}:hide`) {
      const params = Object.assign({}, {hideDelay: 0}, e.detail, {force: true});
      this.hide(params);
    }
  }

  public onShow(params: AlertActionParams) {
    if (params.text || params.html) {
      CSSUtil.addCls(this, params.cls);
      if (params.text) {
        this.$text.textContent = params.text;
      } else if (params.html) {
        this.$text.innerHTML = params.html;
      }
      super.onShow(params);
    }
    this.hide(params);
    return this;
  }

  public onHide(params: AlertActionParams) {
    super.onHide(params);
    CSSUtil.removeCls(this, params.cls);
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.$text = document.createElement('div');
    this.$text.className = 'esl-alert-text';
    this.innerHTML = '';
    this.appendChild(this.$text);
    if (DeviceDetector.isIE) {
      this.appendChild(createZIndexIframe());
    }
  }

  protected bindEvents() {
    super.bindEvents();

    window.addEventListener(`${ESLAlert.eventNs}:show`, this.onWindowEvent);
    window.addEventListener(`${ESLAlert.eventNs}:hide`, this.onWindowEvent);
  }

  protected unbindEvents() {
    super.unbindEvents();

    window.removeEventListener(`${ESLAlert.eventNs}:show`, this.onWindowEvent);
    window.removeEventListener(`${ESLAlert.eventNs}:hide`, this.onWindowEvent);
  }
}

export default ESLAlert;
