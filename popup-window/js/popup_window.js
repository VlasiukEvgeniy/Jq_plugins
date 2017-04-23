function PopUp(sSelector) {
    var p = this;

    p.popUp = $(sSelector);
    p.closeBtn = p.popUp.find(".close_btn");
    p.x = ($(window).width() - p.popUp.width()) / 2;
    p.y = ($(window).height() - p.popUp.height()) / 2;

    p.showHidePW = function () {
        //p.popUp.show();
        setTimeout(
            function () {
                p.popUp.css("display", "block");
                p.popUp.animate({top: p.y}, "slow");
            }
            , 2000);
        setTimeout(p.closePW, 8000);
    };

    p.closePW = function () {
        p.popUp.css("display", "none");
        //p.popUp.hide();
    };

    $(document).ready(p.showHidePW);
    p.closeBtn.bind("click", p.closePW);
}