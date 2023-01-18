import "Styles/sections/featured-product.scss";
import AxSwiper from "../components/swiper-element";

class FeaturedProduct extends AxSwiper {
    constructor() {
        super();
    }

    init() {
        const imageRight = this.closest('.featured-product-content').querySelector('.right-part img');
        const dynamicText = this.closest('.featured-product-content').querySelector('.feature-product-title');

        this.swiperInstance = new window.Swiper(this.slider, {
            slidesPerView: 1,
            loop: true,
            effect: this.config.effect,
            fadeEffect: {
                crossFade: true
            },
            grabCursor: this.config.grabCursor,
            navigation: {
                prevEl: this.prevButtonEl,
                nextEl: this.nextButtonEl,
            },
            on: {
                slideChange: function (swiper) {
                    let activeSlideImage = this.slides[swiper.activeIndex].dataset.imageRight;
                    let activeSlideText = this.slides[swiper.activeIndex].dataset.text;
                    imageRight.src = activeSlideImage
                    dynamicText.innerHTML = activeSlideText
                    imageRight.animate([
                        {
                            opacity: 0
                        },
                        {
                            opacity: 1
                        }
                    ], {
                        duration: 700,
                        fill: 'both',
                        easing: 'ease-out'
                    });
                }
            }
        });
    }
}

customElements.get('featured-product') || customElements.define('featured-product', FeaturedProduct);
