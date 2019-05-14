import SmartCarouselAnimation from './smart-carousel-animation';

class SmartSingleCarouselAnimation extends SmartCarouselAnimation {

    public animate(nextIndex: number, direction: string) {
        const nextSlide = this._carousel.slides[nextIndex];
        const activeSlide = this._carousel.slides[this._carousel.firstIndex];

        const activeSlideStyles = getComputedStyle(activeSlide);
        const slideWidth = parseFloat(activeSlideStyles.width) +
            parseFloat(activeSlideStyles.marginLeft) +
            parseFloat(activeSlideStyles.marginRight);
        const shiftLength = (direction === 'right') ? slideWidth : -slideWidth;

        const activeTrans = +activeSlide.style.transform.match(/(-?[0-9\.]+)/g);
        const nextTrans = +nextSlide.style.transform.match(/(-?[0-9\.]+)/g);

        const nextLeft = shiftLength - nextTrans;
        const activeLeft = activeTrans + shiftLength;

        this._carousel.setAttribute('direction', direction);

        this._carousel.slides.forEach((el) => el.classList.remove('sibling-slide'));

        activeSlide.classList.add('sibling-slide');
        nextSlide.classList.add('sibling-slide');

       // activeSlide.style.left = activeLeft + 'px';
        nextSlide.style.left = nextLeft + 'px';

        activeSlide.style.transform = `translateX(${activeTrans - shiftLength}px)`;
        nextSlide.style.transform = `translateX(${-shiftLength}px)`;

        activeSlide.addEventListener('transitionend', (e) => this._clearAnimation(e), {once: true});
        this._carousel.setAttribute('data-is-animated', 'true');
    }

    private _clearAnimation(event: Event) {
        const target = event.target as HTMLElement;
        const activeSlideStyles = getComputedStyle(target);
        const slideWidth = parseFloat(activeSlideStyles.width) +
            parseFloat(activeSlideStyles.marginLeft) +
            parseFloat(activeSlideStyles.marginRight);
        const direction = this._carousel.getAttribute('direction');

        target.style.transform = 'translateX(0)';

        target.style.left = (direction === 'right') ? -slideWidth + 'px' : slideWidth + 'px';

        // target.classList.remove('sibling-slide');
        this._carousel.removeAttribute('data-is-animated');

    }
}

export default SmartSingleCarouselAnimation;
