function Gallery(sSelector) {
    var g = this;

    g.gallery = $(sSelector);

    g.pictures = g.gallery.find('.b-picture');
    g.arrowPrev = g.gallery.find('.b-preview__arrow_prev');
    g.arrowNext = g.gallery.find('.b-preview__arrow_next');
    g.preview = g.gallery.find('.b-preview');
    g.previewImage = g.gallery.find('.b-preview__image');
    g.previewText = g.gallery.find('.b-preview__text');
    g.current = 0;
    g.max = g.pictures.length;
    g.curentNumBlock = g.gallery.find('.b-preview__currentNum');
    g.qtyBlock = g.gallery.find('.b-preview__qty');
    g.startBtn = g.gallery.find('.b-preview__btn_start');
    g.stopBtn = g.gallery.find('.b-preview__btn_stop');
    g.timer = null;
    g.slideTime = 2000;

    g.showPreview = function () {
        var picture = $(this);

        g.current = g.pictures.index(picture);

        g.current == 0 ? g.arrowPrev.addClass('b-preview__arrow_hide') : g.arrowPrev.removeClass('b-preview__arrow_hide');

        g.current == g.max - 1 ? g.arrowNext.addClass('b-preview__arrow_hide') : g.arrowNext.removeClass('b-preview__arrow_hide');

        g.display(picture);
    };

    g.closePreview = function (event) {
        if (!event || $(event.target).hasClass('b-preview_shown')) {
            g.preview.removeClass('b-preview_shown');
        }
    };

    g.escapeClosePreview = function (event) {
        if (event.keyCode == 27) {
            g.closePreview();
        }
    };

    g.keyPressNext = function (event) {
        if (event.keyCode == 39) {
            if (g.current != g.max - 1) {
                g.showNext();
            }
        }
    };

    g.keyPressPrev = function (event) {
        if (event.keyCode == 37) {
            if (g.current != 0) {
                g.showPrev();
            }
        }
    };

    g.showImage = function (iShift) {
        g.current += iShift;

        // if ( g.current >= g.max ) {
        //     g.current = 0;
        // } else if( g.current < 0 ) {
        //     g.current = g.max - 1;
        // }

        g.current == 0 ? g.arrowPrev.addClass('b-preview__arrow_hide') : g.arrowPrev.removeClass('b-preview__arrow_hide');

        if (g.current == g.max - 1) {
            clearInterval(g.timer);
            g.arrowNext.addClass('b-preview__arrow_hide');
        } else {
            g.arrowNext.removeClass('b-preview__arrow_hide');
        }

        g.display(g.pictures.eq(g.current));
    };

    g.display = function (oPicture) {
        var smallImage = oPicture.find('.b-picture__image'),
            bigImageSrc = smallImage.attr('src').replace('small_', '');

        g.previewImage.attr('src', bigImageSrc);

        g.previewText.html(smallImage.attr('alt'));

        g.preview.addClass('b-preview_shown');

        g.curentNumBlock.html(g.current + 1);

        g.qtyBlock.html(g.max)
    };

    g.showPrev = function () {
        g.showImage(-1);
    };

    g.showNext = function () {
        g.showImage(1);
    };

    g.startSlideShow = function () {
        if (g.current == g.max - 1) {
            g.arrowNext.addClass('b-preview__arrow_hide');
            clearInterval(g.timer);
        } else {
            g.arrowNext.removeClass('b-preview__arrow_hide');
            g.timer = setInterval(g.showNext, g.slideTime)
        }
    };

    g.stopSlideShow = function () {
        clearInterval(g.timer);
    }

    g.pictures.click(g.showPreview);
    g.preview.click(g.closePreview);
    $('body').keyup(g.escapeClosePreview);
    $('body').keyup(g.keyPressNext);
    $('body').keyup(g.keyPressPrev);

    g.arrowPrev.click(g.showPrev);
    g.arrowNext.click(g.showNext);

    g.startBtn.click(g.startSlideShow);
    g.stopBtn.click(g.stopSlideShow);
}
