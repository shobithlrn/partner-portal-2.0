newDashboard = {
    setFunctionality: function () {
        // Feedback alert message
    $(".zmdi-thumb-down, .zmdi-thumb-up").click(function () {
        $(this).parent().toggleClass("l-like");

        var $box = $('.alert');
        var boxLeft = ($(window).width()) / 2 - ($box.width() / 2),
            boxTop = ($(window).height()) / 2 - ($box.height() / 2);
        $box.css({
            top: boxTop
            //left: boxLeft,
        });

        $("#feedBack").fadeIn({queue: false, duration: 'slow'});
        $('#feedBack').animate({top: "40%"}, 'slow');
        $("#feedBack").delay(7000).fadeOut('slow');
        //$("#feedBack").fadeIn('slow').delay(2000).fadeOut('slow');
        //$('#feedBack').fadeIn({queue: false, duration: 'slow'}).delay(40000).fadeOut('slow');
    });

    $(".alert-dismiss").click(function () {
        $('#feedBack').stop(true, true).show().delay(20).fadeOut();
    });

    $('.l-bookmark-holds').click(function () {
        if ($(this).find('i').hasClass('zmdi-bookmark')) {
            $(this).find('i').removeClass('zmdi-bookmark').addClass('zmdi-bookmark-outline');
        }
        else if ($(this).find('i').hasClass('zmdi-bookmark-outline')) {
            $(this).find('i').removeClass('zmdi-bookmark-outline').addClass('zmdi-bookmark');
        }
    });

    // Play list
    $("#dbPlaylist").owlCarousel({
        loop: true,
        margin: 25,
        responsiveClass: true,
        autoPlay: false,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        //stagePadding: 50,
        // Navigation
        nav: true,
        navigation: true,
        navText: ["<i class='zmdi zmdi-chevron-left'></i>", "<i class='zmdi zmdi-chevron-right'></i>"],
        rewindNav: true,
        scrollPerPage: false,

        // Pagination
        pagination: true,
        paginationNumbers: false,

        // Lazy load
        lazyLoad: false,
        lazyFollow: true,
        lazyEffect: "fade",
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
}
}
