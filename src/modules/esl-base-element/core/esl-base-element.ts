/**
 * Base class for ESL custom elements.
 * Allows to define custom element with the optional custom tag name.
 */
export abstract class ESLBaseElement extends HTMLElement {
  /** Custom element tag name */
  public static is = '';
  /** ESL custom element event prefix (namespace) */
  public static eventNs = '';

  protected _connected: boolean = false;

  protected connectedCallback() {
    this._connected = true;
    this.classList.add((this.constructor as typeof ESLBaseElement).is);
  }
  protected disconnectedCallback() {
    this._connected = false;
  }

  /**
   * Check that element is connected and connectedCallback happens.
   */
  public get connected() {
    return this._connected;
  }

  /**
   * Dispatch component custom event.
   * Event is bubbles and cancelable by default, use {@param eventInit} to override that.
   * @param eventName - event name
   * @param [eventInit] - custom event init. See {@link CustomEventInit}
   */
  public $$fire(eventName: string, eventInit: CustomEventInit = {}): boolean {
    const init = Object.assign({bubbles: true, cancelable: true}, eventInit);
    return this.dispatchEvent(new CustomEvent(eventName, init));
  }

  /**
   * Dispatch component custom event.
   * Event is bubbles and cancelable by default, use {@param eventInit} to override that.
   * Will append prefix from static property {@link eventNs} if it is defined.
   * @param eventName - event name
   * @param [eventInit] - custom event init. See {@link CustomEventInit}
   */
  public $$fireNs(eventName: string, eventInit: CustomEventInit = {}): boolean {
    const component = this.constructor as typeof ESLBaseElement;
    const eventFullName = (component.eventNs ? `${component.eventNs}:` : '') + eventName;
    return this.$$fire(eventFullName, eventInit);
  }

  /**
   * Register component in a {@link customElements} registry
   * @param [tagName] - custom tag name to register custom element
   */
  public static register(this: typeof ESLBaseElement & CustomElementConstructor, tagName?: string) {
    tagName = tagName || this.is;
    if (!tagName) throw new Error('Can not define custom element');
    const constructor = customElements.get(tagName);
    if (constructor) {
      if (constructor.is !== tagName) throw new Error('Element declaration tag inconsistency');
      return;
    }
    if (this.is !== tagName) {
      this.is = tagName;
    }
    customElements.define(tagName, this);
  }
}
