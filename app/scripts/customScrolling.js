(function (window, $) {

    var customScrolling = window.customScrolling || {};

    window.customScrolling = function() {

        var currentTranslateY = 0;

        var scrollSpeed = 100;

        var $scroller = $('.js-scroller');

        var $scrollerParent = $scroller.parent();


        $('body').on('mousewheel', function (event) {
            
            if ($scrollerParent.outerHeight() >= $scroller.outerHeight()) {
                return;
            }

            currentTranslateY = event.deltaY < 0 ? (currentTranslateY - scrollSpeed) : (currentTranslateY + scrollSpeed);

            var scrollY = -(currentTranslateY);

            var reachedBottom = ($scrollerParent.outerHeight() + scrollY) > $scroller.outerHeight() ? true : false;

            if (reachedBottom && (event.deltaY < 0)) {

                $scroller.css('transform', 'translateY(' + -($scroller.outerHeight() - $scrollerParent.outerHeight()) + 'px) translateZ(0)');

                currentTranslateY += scrollSpeed;

                return;
            }

            if (currentTranslateY >= 0) {

                currentTranslateY = 0;
                $scroller.css('transform', 'translateY(' + 0 + 'px) translateZ(0)');
                return;

            }

            if (event.deltaY < 0) {

                $scroller.css('transform', 'translateY(' + currentTranslateY + 'px) translateZ(0)');

            } else {

                $scroller.css('transform', 'translateY(' + currentTranslateY + 'px) translateZ(0)');

            }
        });
    };

})(window, jQuery);