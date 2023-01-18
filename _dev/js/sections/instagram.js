import "Styles/sections/instagram.scss";
import AxSwiper from "../components/swiper-element";

//Override Swiper
class Instagram extends AxSwiper {
	constructor() {
		super();
	}

	init () {
		this.swiperInstance = new window.Swiper(this.slider, {
			slidesPerView: this.config.slideInView,
			slidesPerGroup: this.config.slidesToMove,
			enabled: !this.config.stackMobile,
			loop: this.config.loop,
			autoplay: this.config.autoplay,
			speed: this.config.speed,
			grabCursor: this.config.grabCursor,
			effect: this.config.effect,
			freeMode: this.config.freemode,
			pagination: {
				el: this.paginationEl,
			},
			navigation: {
				prevEl: this.prevButtonEl,
				nextEl: this.nextButtonEl,
			},
			breakpoints: {
        768: {
          slidesPerView: 2.35
        },
        991: {
          slidesPerView: this.config.blockLength
        }
			}
		});
		if (this.classList.contains('ax-load-swiper')) this.classList.remove('ax-load-swiper')
	}
}

customElements.get('instagram-component') || customElements.define('instagram-component', Instagram);
