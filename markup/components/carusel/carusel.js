import Swiper from 'swiper';

const swiper = new Swiper ('.main-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 600,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
