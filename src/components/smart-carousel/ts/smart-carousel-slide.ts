/***
 * Slide controller
 * @author Julia Murashko
 */
import {CustomElement} from '@helpers/custom-element';

class SmartCarouselSlide extends CustomElement {
	constructor() {
		super();
	}

	protected connectedCallback() {
		//
	}

	// TODO: refactor (check type of Element)
	public get index(): number {
		return Array.prototype.indexOf.call(this.parentNode.children, this);
	}

	public get active(): boolean {
		return this.hasAttribute('active');
	}

	public _setActive(active: boolean) {
		// TODO: think about public ?
		if (active) {
			this.setAttribute('active', '');
		} else {
			this.removeAttribute('active');
		}
	}

	public get first(): boolean {
		return this.hasAttribute('first');
	}
	public _setFirst(first: boolean) {
		if (first) {
			this.setAttribute('first', '');
		} else {
			this.removeAttribute('first');
		}
	}
}

export default SmartCarouselSlide;
