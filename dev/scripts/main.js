$(function() {
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        easing: 'easeInOutCubic',           
    });

    $('#clear').on('click vclick', function() {
        $('.container').css('opacity', '0');
    });
    $('#edit').on('click vclick', function() {
        $('.container').css('opacity', '1');
    });

    let tickets = 0;
    $('.container__btn').on('click vclick', function() {
        tickets++;
        tickets === 1 ? console.log(`You have ${tickets} ticket in your cart`) : console.log(`You have ${tickets} tickets in your cart.`)
    });
});