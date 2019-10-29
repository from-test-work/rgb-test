import $ from 'jquery';
import {breakpoints} from '../../static/js/helpers/breakpoints.js';

export default class Navigation {
    constructor(opts) {
        const bodyIsOpenedClass = 'is-nav-opened';
        const navMobileIsOpenedClass = 'expand';

        this.$body = $('body');
        this.$hamburger = $('.hamburger');
        this.$navMobile = $('.nav__mobile');
        this.bodyIsOpenedClass = bodyIsOpenedClass;
        this.navMobileIsOpenedClass = navMobileIsOpenedClass;

        $.extend(this, opts);
    };

    init() {
        this.$hamburger.on('click', (e) => {
            this.mobileNavigateToogle(e);
        });
        this.resize(breakpoints);
    };

    mobileNavigateToogle(event) {
        event.preventDefault();
        const $target = $(event.target);
        const $hamburger = $target.closest('.hamburger');

        if ($hamburger.length) {
            this.$body.toggleClass(this.bodyIsOpenedClass);
            this.$navMobile.toggleClass(this.navMobileIsOpenedClass);
        }
    };

    resize(breakpoints){
        const $wndScnWidth = $(window).outerWidth();

        ($wndScnWidth >= breakpoints.lg)
            ? (
                this.$body.removeClass(this.bodyIsOpenedClass),
                this.$navMobile.removeClass(this.navMobileIsOpenedClass)
            )
            : null
    };
}
