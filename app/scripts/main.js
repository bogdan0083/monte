$(document).ready(function () {
    
    // init custom scroll
    customScrolling();
    
    var $hotelSlider = $('.hotel-slider');

    $hotelSlider.find('.wrapper').slick({
        slidesToShow: 4,
        infinite: true,
        dots: false,
        prevArrow: $hotelSlider.find('.arrow-left'),
        nextArrow: $hotelSlider.find('.arrow-right')
    });

    $(window).scroll(function () {
        console.log($(window).scrollTop());
    });

    var $destinations = $('.destinations');

    if ($destinations) {
        var $destinationsItems = $('.destinations-item');

        var rest = $destinationsItems.length % 3;

        if (rest === 1) {
            $destinationsItems.eq(-1).addClass('js-full');
        }

        if (rest === 2) {
            $destinationsItems.eq(-1).addClass('js-half');
            $destinationsItems.eq(-2).addClass('js-half');
        }
    }
});