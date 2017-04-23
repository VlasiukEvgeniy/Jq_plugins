function Menu(sSelector) {

    var m = this;

    m.menu = $(sSelector);
    m.menuItems = m.menu.find('li');

    m.showHideSubmenu = function (e) {
        e.preventDefault(); // prevent default option for links
        m.menuItems.children('ul').stop().slideUp();
        $(this).children('ul').stop().slideToggle();
    };

    m.menuItems
        .click(m.showHideSubmenu);
}