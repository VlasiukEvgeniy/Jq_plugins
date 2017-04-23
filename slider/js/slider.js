function Slider(sSelector) {
    var s = this;

    s.slider = $(sSelector);

    s.slides = s.slider.find('.b-slide');
    s.slidePicture = s.slider.find('.b-slide_picture');
    s.arrowPrev = s.slider.find('.b-slider__btn_prev');
    s.arrowNext = s.slider.find('.b-slider__btn_next');
    s.dotItems = s.slider.find('.b-slide__dot');
    s.current = 1;
    s.max = 3;

    s.timer = null;
    s.slideTime = 3000;

    //======================================
    // change value
    s.changeValue = function (iShift) {
        console.log(s.current);
        s.current += iShift;
        console.log(s.current);

        if (s.current > s.max) {
            s.current = 1;
        } else if (s.current < 1) {
            s.current = s.max;
        }
        s.setValueToSRC();
    };

    // set picture src
    s.setValueToSRC = function () {
        var imgPath = "img/" + s.current + ".jpg";
        s.slidePicture.attr("src", imgPath);
    };

    s.getCurrentBtn = function () {
        var currentBtn = $(this);
        s.current = s.dotItems.index(currentBtn) + 1;
        s.setValueToSRC();
    };

    // show next slide
    s.showNext = function () {
        s.changeValue(1);
    };

    // show prev slide
    s.showPrev = function () {
        s.changeValue(-1);
    };

    // show next slide on key ->
    s.keyPressNext = function (event) {
        if (event.keyCode == 39) {
            s.showNext();
        }
    };

    // show prev slide on key ->
    s.keyPressPrev = function (event) {
        if (event.keyCode == 37) {
            s.showPrev();
        }
    };

    // stop slide show on hover picture
    s.stopOnHover = function () {
        $(".b-slider__content").hover(function () {
            clearInterval(s.timer);
        }, function () {
            s.timer = setInterval(s.showNext, s.slideTime);
        });
    };

    // start slide show
    s.startSlideShow = function () {
        s.timer = setInterval(s.showNext, s.slideTime);
        s.stopOnHover();
    };

    //======================================
    s.slidePicture.click(s.showNext);
    s.arrowNext.click(s.showNext);
    s.arrowPrev.click(s.showPrev);

    $('body').keyup(s.keyPressNext);
    $('body').keyup(s.keyPressPrev);

    s.dotItems.click(s.getCurrentBtn);

    s.startSlideShow();
}