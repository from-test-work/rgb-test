import $ from 'jquery';

$.fn.isInViewport = function () {
    const elementTop = $(this).offset().top;
    const elementBottom = elementTop + $(this).outerHeight();
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();
    return {
        result: elementBottom > viewportTop && elementTop < viewportBottom
    };
};

$.fn.offsetCenter = function () {
    const elementTop = $(this).offset().top;
    const elementBottom = elementTop + $(this).outerHeight();
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();
    const halfOfHeight = $(this).outerHeight() / 2;

    return (elementBottom > viewportTop && elementTop < viewportBottom);
    // return (elementBottom > (viewportTop + halfOfHeight))  && ((elementTop + halfOfHeight)  < viewportBottom);
};

$.hexToRgb = function(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};