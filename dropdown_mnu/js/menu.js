function Menu(sSelector) {

    var m = this;

    m.menu = $(sSelector);
    m.menuItems = m.menu.find('li');

    m.showSubmenu = function () {
        $(this).children('ul')
        // .show();
            .stop()
            .css('display', 'block')
            .animate({'opacity': 1}, 1000);
    };
    m.hideSubmenu = function () {
        $(this).children('ul')
        //.hide();
            .stop()
            .animate({'opacity': 0},
                1000,
                function () {
                    $(this).css('dispay', 'none')
                })
    };

    m.menuItems.mouseover(m.showSubmenu).mouseout(m.hideSubmenu);
}