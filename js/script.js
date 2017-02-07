jQuery.fn.exists = function () {
    return $(this).length;
};

/* Mobile Menu
 ========================================================*/
;
$(document).ready(function () {
    var mmenu = $('#mmenu');
    var sf_menu = $('.sf-menu');
    mmenu.on('click', function (e) {
        e.preventDefault();
        sf_menu.toggleClass("visible").toggleClass("opened");
        $('.mmenu-overlay_full').toggleClass("invisible");
        $('body').toggleClass("mmenu-overlay_full-nonscroll");
    });
});

/* Select FormStyller
 ========================================================*/
;
$(document).ready(function () {
    $('.select_style').styler({
        selectVisibleOptions: 6
    });
    $('.search_select').styler({
        selectSearch: true,
        selectVisibleOptions: 6
    });
});

///* Equalheight
// ========================================================*/
equalheight = function (container) {

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
};

$(window).load(function () {
    equalheight('.customScroll__list-li');
});


$(window).resize(function () {
    equalheight('.customScroll__list-li');
});































///* jQuery custom content scroller
// ========================================================*/
//(function ($) {
//    $(window).load(function () {
//        $(".customScroll").mCustomScrollbar({
//            scrollButtons: {
//                enable: true
//            },
//            theme: "dark",
//            horizontalScroll: true,
//            advanced: {updateOnContentResize: true, updateOnBrowserResize: true},
//            axis: "yx",
//            setHeight: 'auto',
//            setWidth: "auto",
//            autoDraggerLength: false
//        });
//    });
//})(jQuery);

