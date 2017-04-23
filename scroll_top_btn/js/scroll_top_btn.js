function Scroll(sSelector) {
    var s = this;

    s.scr = $(sSelector);
    s.top_btn = s.scr.find(".top_btn");

    s.showHideTopBtn = function () {
        if ($(window).scrollTop() > 600) {
            s.top_btn.fadeIn(3000);
        }
        else {
            s.top_btn.fadeOut(3000);
        }
    };
    s.slowScroll = function () {
        $("html,body").stop()
            .animate({scrollTop: 0}, "slow");
    };

    $(window).scroll(s.showHideTopBtn);
    s.top_btn.bind("click", s.slowScroll);
}

