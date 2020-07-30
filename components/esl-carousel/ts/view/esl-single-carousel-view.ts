import {ESLCarouselView, ESLCarouselViewRegistry} from './esl-carousel-view';
import ESLCarousel from '../esl-carousel';

class ESLSingleCarouselView extends ESLCarouselView {

	constructor(carousel: ESLCarousel) {
		super(carousel);
	}

	public bind() {}

	// TODO: check
	public draw() {
		const slideStyles = getComputedStyle(this.carousel.$slides[this.carousel.firstIndex]);
		const slidesAreaStyles = getComputedStyle(this.carousel.$slidesArea);

		const slideWidth = parseFloat(slidesAreaStyles.width) - parseFloat(slideStyles.marginLeft) - parseFloat(slideStyles.marginRight);
		const computedLeft = -(parseFloat(slidesAreaStyles.width) / this.carousel.firstIndex);

		this.carousel.$slides.forEach((slide) => {
			slide.style.minWidth = slideWidth + 'px';
			slide.style.left = computedLeft + 'px';
		});
	}

	public goTo(nextIndex: number, direction: string) {
		if (this.carousel.firstIndex === nextIndex) {
			return;
		}

		this.carousel.setAttribute('data-is-animated', 'true');
		this.carousel.setAttribute('direction', direction);

		const activeSlide = this.carousel.$slides[this.carousel.firstIndex];
		const nextSlide = this.carousel.$slides[nextIndex];

		activeSlide.classList.add(direction);
		nextSlide.classList.add(direction);

		activeSlide.classList.add('prev');

		activeSlide.addEventListener('animationend', (e) => this._cleanAnimation(e));
		nextSlide.addEventListener('animationend', (e) => this._cleanAnimation(e));
	}

	private _cleanAnimation(event: Event) {
		const target = event.target as HTMLElement;
		const direction = this.carousel.getAttribute('direction');

		target.classList.remove(direction);
		target.classList.remove('prev');

		this.carousel.removeAttribute('data-is-animated');
	}

	// tslint:disable-next-line:no-empty
	public unbind() {
	}
}

ESLCarouselViewRegistry.instance.registerView('single', ESLSingleCarouselView);

export default ESLSingleCarouselView;