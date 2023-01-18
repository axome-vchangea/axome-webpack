import "Styles/sections/featured-collections.scss";
import AxSwiper from "../components/swiper-element";

//Override Swiper
class AxFeaturedCollection extends AxSwiper {
    constructor() {
        super();
    }

    init() {
        this.swiperInstance = new window.Swiper(this.slider, {
            loop: this.config.loop,
            spaceBetween: 0,
            slidesPerGroup: this.config.slidesToMove,
            autoplay: this.config.autoplay,
            speed: this.config.speed,
            effect: this.config.effect,
            freeMode: this.config.freemode_mobile,
            breakpoints: {
                0: {
                    slidesPerView: 1.2,
                    navigation: false,
                },
                768: {
                    slidesPerView: 2.35,
                    navigation: false
                },
                1200: {
                    grabCursor: this.config.grabCursor,
                    freeMode: false,
                    slidesPerView: this.config.slideInView,
                    navigation: {
                        prevEl: this.prevButtonEl,
                        nextEl: this.nextButtonEl,
                    },
                }
            }
        });
        if (this.classList.contains('ax-load-swiper')) this.classList.remove('ax-load-swiper')
    }
}

customElements.get('featured-collection') || customElements.define('featured-collection', AxFeaturedCollection);

let collectionsHeadings = document.querySelectorAll('.collections-multiple .featured-collections__headings_container .featured-collections__heading');
let collectionsTabs = document.querySelectorAll('.collections-multiple featured-collection');

for (let i = 0; i < collectionsHeadings.length; i++) {
    let title = collectionsHeadings[i];
    title.addEventListener('click', _ => {
        let tab = collectionsTabs[i];
        if (tab.classList.contains('encoded')) {
            let encodedSlide = tab.querySelectorAll('.swiper-slide');
            encodedSlide.forEach(slide => {
                slide.innerHTML = decodeURIComponent(escape(window.atob(slide.innerHTML)));
            })
            tab.classList.remove('encoded');
        }
        closeOtherTabs();
        tab.classList.add('visible');
        title.classList.add('visible')
    })
}

function closeOtherTabs() {
    collectionsTabs.forEach((slide) => {
        slide.classList.contains("visible") && slide.classList.remove("visible");
    });
    collectionsHeadings.forEach((title) => {
        title.classList.contains("visible") && title.classList.remove("visible");
    });
}