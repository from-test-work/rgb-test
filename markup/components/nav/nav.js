import $ from 'jquery';

$(document).ready(function () {
    $('.hamburger').on('click', (event) => {
        event.preventDefault();
        const $body = $('body');
        const $navMobile = $('.nav__mobile');

        $navMobile.toggleClass('expand');
        $body.toggleClass('is-nav-opened');
        // $body.prepend($navMobile);


        return false;
    });
});
