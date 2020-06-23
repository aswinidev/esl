/**
 * Base class for SmartLibrary custom elements.
 * Allows to define custom element with the optional custom tag name.
 */
export abstract class CustomElement extends HTMLElement {
	public static is = '';
	public static eventNs = '';

	protected _connected: boolean = false;

	protected connectedCallback() {
		this._connected = true;
		this.classList.add((this.constructor as typeof CustomElement).is);
	}
	protected disconnectedCallback() {
		this._connected = false;
	}

	protected get connected() {
		return this._connected;
	}

	/**
	 * Dispatch component custom event.
	 * Will append prefix from static property {eventNs} if it is defined.
	 * @param {string} eventName -  event name
	 * @param {CustomEventInit} eventInit - event init
	 */
	public dispatchCustomEvent(eventName: string,
	                           eventInit: CustomEventInit = {bubbles: true}): boolean {
		const component = this.constructor as typeof CustomElement;
		const eventFullName = (component.eventNs ? `${component.eventNs}:` : '') + eventName;
		const event = new CustomEvent(eventFullName, eventInit);
		return this.dispatchEvent(event);
	}

	/**
	 * Register component in a {customElements} registry
	 * @param {string} tagName - tag name to register custom element
	 * NOTE: use super.register.call(T extends CustomElement, tagName) in overwritten register method in TS
	 */
	public static register(this: typeof CustomElement & CustomElementConstructor, tagName?: string) {
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