import "Styles/sections/push-collections.scss";
import AxSwiper from "../components/swiper-element";

//Override Swiper
class pushCollections extends AxSwiper {
    constructor() {
        super();
    }

    init() {
        this.swiperInstance = new window.Swiper(this.slider, {
            loop: this.config.loop,
            slidesPerView: this.config.slideInView,
            slidesPerGroup: this.config.slidesToMove,
            autoplay: this.config.autoplay,
            speed: this.config.speed,
            effect: this.config.effect,
            spaceBetween: 20,
            freeMode: this.config.freemode_mobile,
            init: !this.config.stackMobile,
            navigation: {
                prevEl: this.prevButtonEl,
                nextEl: this.nextButtonEl,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.2,
                    slidesPerGroup: 1,
                    navigation: false,
                },
                768: {
                    slidesPerView: 2.5,
                    navigation: false,
                },
                1200: {
                    grabCursor: this.config.grabCursor,
                    freeMode: false,
                    spaceBetween: 50,
                    slidesPerView: this.config.slideInView,
                    slidesPerGroup: this.config.slidesToMove,
                    navigation: {
                        prevEl: this.prevButtonEl,
                        nextEl: this.nextButtonEl,
                    },
                },
                2000: {
                    grabCursor: this.config.grabCursor,
                    freeMode: false,
                    spaceBetween: 50,
                    slidesPerView: this.config.slideInView === 4 || this.config.slideInView === 3 ? this.sliderLength >= 5 ? this.config.slideInView + 1 : this.sliderLength : this.config.slideInView,
                    slidesPerGroup: this.config.slidesToMove,
                    navigation: {
                        prevEl: this.prevButtonEl,
                        nextEl: this.nextButtonEl,
                    }
                }
            }
        });
        if (this.config.stackMobile && window.innerWidth > 768) {
            this.swiperInstance.init();
        }
    }
}

customElements.get('push-collections') || customElements.define('push-collections', pushCollections);