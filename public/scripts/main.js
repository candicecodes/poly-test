'use strict';

$(function () {
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        easing: 'easeInOutCubic'
    });

    $('#clear').on('click vclick', function () {
        $('.container').css('display', 'none');
    });
    $('#edit').on('click vclick', function () {
        $('.container').css('display', 'flex');
    });

    var tickets = 0;
    $('.container__btn').on('click vclick', function () {
        tickets++;
        tickets === 1 ? console.log('You have ' + tickets + ' ticket in your cart') : console.log('You have ' + tickets + ' tickets in your cart.');
    });
});