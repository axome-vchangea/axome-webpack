import "Styles/sections/featured-blog.scss";
import AxSwiper from "../components/swiper-element";

//Override Swiper
class FeaturedBlog extends AxSwiper {
	constructor() {
		super();
	}

	init () {
		this.swiperInstance = new window.Swiper(this.slider, {
			slidesPerView: 1.32,
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
          slidesPerView: this.config.slideInView
        }
			}
		});
		if (this.classList.contains('ax-load-swiper')) this.classList.remove('ax-load-swiper')
	}
}

customElements.get('featured-blog-component') || customElements.define('featured-blog-component', FeaturedBlog);
