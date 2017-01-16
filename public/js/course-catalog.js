module.exports = {
    setFunctionality: function() {
        var $el, leftPos, newWidth
        console.log('Shobith Shetty the great')
        $('.navbar-toggle').click(function() {});
        var $pageSuvTab = $('.l-sub-nav li a');
        $pageSuvTab.click(function() {
            var index = $pageSuvTab.index($(this));
            $('.l-sub-tab-container .l-sub-tab-panel').hide().eq(index).fadeIn("slow");
        }).eq(0).click();

        $('.l-bookmark-holds').click(function() {
            if ($(this).find('i').hasClass('mdi-bookmark')) {
                $(this).find('i').removeClass('mdi-bookmark').addClass('mdi-bookmark-outline');
            } else if ($(this).find('i').hasClass('mdi-bookmark-outline')) {
                $(this).find('i').removeClass('mdi-bookmark-outline').addClass('mdi-bookmark');
            }
        });

		
		//Featured & Topcis course active function St
		/*$('#featuredList a').click(function(){
			$('#featuredList a, #topicsList a').removeClass('active');
			$(this).addClass('active');
		});
		
		$( "#topicsList" ).delegate( "a", "click", function() {
			$('#topicsList a').removeClass('active');
			$(this).addClass('active');
		});*/
		 
		//Featured & Topcis course active function En
		
		//Focus Scroll on click St 
		// $('#featuredList a, #topicsList a').on('click', function(){
			// $('html, body').animate({
				// scrollTop: $('#scrollFocus').offset().top
			// }, 500);
		// }); 
		
		

        // Toggle function - Featured courses Toggle function
        $(".l-arrow-circle").click(function(){
            var hasClass = $( "#sub-tab-container" ).hasClass( "l-slide-down");
            if(hasClass){
                $(".l-featured-courses").slideUp("slow",function(){
                    if($("#l-all-courses").css('display')=='none'){
                        $('#l-all-courses').css( "display", "" );
                    }
                });
                $(".l-cc-menu-wrapper").removeClass("l-slide-down");
            }
            else{
                $(".l-featured-courses").slideDown("slow",function(){
                    if($(".l-featured-courses").css('display')=='none'){
                        $('.l-featured-courses').css( "display", "" );
                    }
                });
                $(".l-cc-menu-wrapper").addClass("l-slide-down");
            }
        });

        $("#md-cc-menu").click(function(){
            var hasClass = $("#sub-tab-container").hasClass( "l-slide-down");
            if(!hasClass){
                $(".l-featured-courses").slideDown("slow",function(){
                    if($(".l-featured-courses").css('display')=='none'){
                        $('.l-featured-courses').css( "display", "" );
                    }
                });
                $(".l-cc-menu-wrapper").addClass("l-slide-down");
            }
        });

        // Toggle All courses Mobile menu
        $(".l-all-courses-dd").click(function(){
            $('.l-featured-courses').css( "display", "" );
            $(".l-all-courses").slideToggle("slow",function(){
                if($("#l-all-courses").css('display')=='none'){
                    $('#l-all-courses').css( "display", "" );
                }
            });
            $(".l-all-courses-dd").toggleClass("open");
            //$('.l-all-courses').removeAttr('display');
            //$('.l-all-courses').css( "display", "" );
            return false;
        });

        $(document).click(function(){
            if($("#xs-cc-menu").hasClass('open')==true){
                $(".l-all-courses").slideUp("slow",function(){
                    if($("#l-all-courses").css('display')=='none'){
                        $('#l-all-courses').css( "display", "" );
                    }
                });
                $(".l-all-courses-dd").removeClass("open");
            }
        });

        if($("#xs-cc-menu").hasClass('open')==true){
            $(".l-all-courses").slideUp("slow",function(){
                if($("#l-all-courses").css('display')=='none'){
                    $('#l-all-courses').css( "display", "" );
                }
            });
            $(".l-all-courses-dd").removeClass("open");
        }
        // Mobile dropdown
        $('#l-all-courses span').on('click', function(){
            if($("#xs-cc-menu").hasClass('open')){
                $(".l-featured-courses span").removeClass("active");
                $(this).addClass('active');
                $('.all-courses-field').val($(this).text());
                $(".l-all-courses").slideUp("slow",function(){
                    if($("#l-all-courses").css('display')=='none'){
                        $('#l-all-courses').css( "display", "" );
                    }
                });
                $(".l-all-courses-dd").removeClass("open");
            }
            console.log($(this).text());
        });

        //Filter Courses
        $('#filterTab').click(function () {
            $('#filterPanel').removeClass('l-filter-close').addClass('l-filter-open');
        });
        $('#filteringDone').click(function () {
            $('#filterPanel').removeClass('l-filter-open').addClass('l-filter-close');
        });

        $('#CloseFilter').click(function () {
            $('#filterPanel').removeClass('l-filter-open').addClass('l-filter-close');
        });


        // Filter panel ST
        $('.l-filter-panel li a').click(function () {
            if ($(this).next('div.l-filter-options').hasClass('l-close-panel')) {
                $('.l-filter-options').removeClass('l-open-panel').addClass('l-close-panel');
                $('.l-filter-panel li a').find('i').removeClass('zmdi-minus').addClass('zmdi-plus');
                $(this).find('i').removeClass('zmdi-plus').addClass('zmdi-minus');
                $(this).next('div').removeClass('l-close-panel').addClass('l-open-panel');
            }
            else if ($(this).next('div.l-filter-options').hasClass('l-open-panel')) {
                $('.l-filter-options').removeClass('l-open-panel').addClass('l-close-panel');
                $('.l-filter-panel li a').find('i').removeClass('zmdi-minus').addClass('zmdi-plus');
                $(this).find('i').removeClass('zmdi-minus').addClass('zmdi-plus');
                $(this).next('div').removeClass('l-open-panel').addClass('l-close-panel');
            }
        });



        // Search courses field auto populate list
        $("#searchCourses").keypress(function(event) {
            $("#searchTextfield").addClass("open");
            //$("#searchTextfield .zmdi-search").addClass("hide");
            //$("#searchTextfield .zmdi-close").removeClass("hide");
        });

        $("#searchCourses").focus(function() {
            //$("#searchTextfield .zmdi-search").addClass("hide");
            //$("#searchTextfield .zmdi-close").removeClass("hide")
        });

        $("#searchCourses").blur(function() {
            //$("#searchTextfield").removeClass("open");
            $("#searchTextfield .zmdi-search").removeClass("hide");
            $("#searchTextfield .zmdi-close").addClass("hide");
            $("#searchTextfield").removeClass("open");
        });

        /**
        $("#closeSearch").click(function() {
            $("#searchTextfield").removeClass("open");
            $("#searchTextfield .zmdi-search").removeClass("hide");
            $("#searchTextfield .zmdi-close").addClass("hide");
            $("#searchCourses").val("");
        });  **/


        $('#searchCourses').keydown(function(e) {
            if(e.which == 40){
                if($("#selectAutoCourses li.active").length!=0) {
                    var storeTarget	= $('#selectAutoCourses').find("li.active").next();
                    $("#selectAutoCourses li.active").removeClass("active");
                    storeTarget.focus().addClass("active");
                }
                else {
                    $('#selectAutoCourses').find("li:first").focus().addClass("active");
                }
            }
            if(e.which == 38){
                if($("#selectAutoCourses li.active").length!=0) {
                    var storeTarget	= $('#selectAutoCourses').find("li.active").prev();
                    $("#selectAutoCourses li.active").removeClass("active");
                    storeTarget.focus().addClass("active");
                }
                else {
                    $('#selectAutoCourses').find("li:first").focus().addClass("active");
                }
            }
        });


        //close of Search courses field auto populate list
        // Filter labels

        $('.l-close-filter').on('click', function () {
            $(this).parent().fadeOut("slow", function () {
                var tags = $('.l-filter-labels .l-btn-filter');
                var count = 0;
                for (var i = 0; i < tags.length; i++) {
                    if ($(tags[i]).css('display') != 'none') {
                        break;
                    }
                    else {
                        count++
                    }
                }
                if (tags.length == count) {
                    $(".l-filter-labels").fadeOut("medium");
                }
            });
        });

        // Filter Clear all button
        $('#clearAll').click(function(){
            var cb = $('ul.l-filter-checkbox-list').find('input[type=checkbox]');
            cb.prop('checked', false);
        });

		// Select courses	
		$( "#products" ).delegate( 'input[type=checkbox].checked-item', "click", function() {
           var cnt = $(".checked-item:checked").length; 
           if(cnt > 0) {
               $('#actionMenu').fadeIn('slow');
			   $(".l-restore-course").addClass("l-signle-selected");  
           }
           else { 
               $('#actionMenu').fadeOut('slow');
			   $(".l-restore-course").removeClass("l-signle-selected");  
           }
		});
        // Action menu
		$('input[type=checkbox].chechk-action').click(function(){  	
			var cnt = $(".chechk-action:checked").length;
			if(cnt > 0) {
				$('#actionMenu').fadeIn('slow');
				var cb = $('#products').find('input[type=checkbox].checked-item');				
				cb.prop('checked', true);
				$('.l-filter-options').find('.dropdown-menu li').removeClass('active');
				$('#checkedAllitem').parent().addClass('active');
				}
			else {
				$('#actionMenu').fadeOut('slow');
				var cb = $('#products').find('input[type=checkbox].checked-item');				
				cb.prop('checked', false);	
				$('.l-filter-options').find('.dropdown-menu li').removeClass('active');
				$('#uncheckAllitem').parent().addClass('active');				
				}
			
		});
		
        $('#uncheckAllitem').click(function(){
			var cb = $('#products').find('input[type=checkbox].checked-item');	
			var cbR = $('.l-restore-course').find('input[type=checkbox].chechk-action');
			cbR.prop('checked', false);
			cb.prop('checked', false);
			$('#actionMenu').fadeOut('slow');
			$("#checkCourse i.zmdi").removeClass("zmdi-check");
			$("#checkCourse i.zmdi").addClass("zmdi-minus");
			$('.l-filter-options').find('.dropdown-menu li').removeClass('active');
			$(this).parent().addClass('active');
			$(".l-restore-course").removeClass("l-signle-selected");
        });		
		

        $('#checkedAllitem').click(function(){
			var cb = $('#products').find('input[type=checkbox].checked-item');
			var cbR = $('.l-restore-course').find('input[type=checkbox].chechk-action');
			cbR.prop('checked', true);
			cb.prop('checked', true);				
			$('#actionMenu').fadeIn('slow');
			$("#checkCourse i.zmdi").addClass("zmdi-check");
			$("#checkCourse i.zmdi").removeClass("zmdi-minus");
			$('.l-filter-options').find('.dropdown-menu li').removeClass('active');
			$(this).parent().addClass('active');
			$(".l-restore-course").removeClass("l-signle-selected");
            // var cb = $('#products').find('input[type=checkbox].checked-item');
            // cb.prop('checked', true);
            // $('#actionMenu').fadeIn('slow');
            // $("#checkCourse i.zmdi").addClass("zmdi-check");
            // $("#checkCourse i.zmdi").removeClass("zmdi-minus");
        });
		 
		
		
		// $('#Bookmarked').click(function(){	
			// if( $('.thumbnail .l-bookmark-holds .zmdi').hasClass('zmdi-bookmark-outline')){ 
				// $('#actionMenu').fadeIn('slow');
				// $(this).parent().find('input[type=checkbox].checked-item').prop('checked', true);
			// };
		// });	
			
		// $('#notBookmarked').click(function(){				
			// $("#chechk1").prop('checked', false);
			// $("#chechk2").prop('checked', true);
			// $("#chechk3").prop('checked', false);
			// $('#actionMenu').fadeIn('slow');
		// });		
		

        // check course card from list
        $("#checkCourse").click(function(e){
            e.preventDefault();
            $(this).find('i.zmdi').toggleClass('zmdi-check zmdi-minus');
            if($("#checkCourse i").hasClass('zmdi-check')==true){
                var cb = $('#products').find('input[type=checkbox].checked-item');
                cb.prop('checked', true);
                $('#actionMenu').fadeIn('slow');
            }
            else {
                var cb = $('#products').find('input[type=checkbox].checked-item');
                cb.prop('checked', false);
                $('#actionMenu').fadeOut('slow');
            }
        });



        // Sort dropdown
        /*$('#sort-dd li a').on('click', function(){
         //$('#sortCourses').text($(this).text());
         });*/


        $('#filterTab').click(function(){
            $('#filterPanel').removeClass('l-filter-close').addClass('l-filter-open');
        });
        $('#filteringDone').click(function(){
            $('#filterPanel').removeClass('l-filter-open').addClass('l-filter-close');
        });

        $('#CloseFilter').click(function(){
            $('#filterPanel').removeClass('l-filter-open').addClass('l-filter-close');
        });

        // Sort by function ST
        $('#sortTab').click(function(){
            $('#sortBy').removeClass('l-filter-close').addClass('l-filter-open');
        });

        $('#closeSort').click(function(){
            $('#sortBy').removeClass('l-filter-close').addClass('l-filter-open');
            $('#sortBy').removeClass('l-filter-open').addClass('l-filter-close');
        });
        // Sort by function EN




    },

    setGridListView: function(setView) {
        var removeView = 'grid';
        if (setView == 'grid')
            removeView = 'list';
        $('#products .item').removeClass(removeView + '-group-item');
        $('#products .item').addClass(setView + '-group-item');
    },

    setdropDownFunctionality: function(){
        // Sort dropdown
        /*setTimeout(function () {
         $('#sort-dd li a').on('click', function(){
         $('#sortCourses').text($(this).text());
         });
         },100)*/


    },
    setTooltip:function()
    {
        //////////////////////////////////
        // Tooltip - Course Facilities auto/video/mobile/wcag
        $('[data-toggle="tooltip"]').tooltip();
    },
    navClick:function()
    {
        //Code for Nevbar flickring issue in desktop ST
        $(".nav").find("li").on("click", "a", function () {
            $('.navbar-collapse.in').collapse('hide');
        });
        //Code for Nevbar flickring issue in desktop EN

        //Header Sticky Script St
        $(window).scroll(function(){ 
        if ($(this).scrollTop() > 10){
            $(".navbar-fixed-top").stop(true, true).delay(300).animate({top: -50, opacity: 1});
            $(".navbar-fixed-top .l-main-nav-bar").addClass("l-bar-fixed");
        }
        else{
            $(".navbar-fixed-top").stop(true, true).delay(300).animate({top: 0, opacity: 1});
            $(".navbar-fixed-top .l-main-nav-bar").removeClass("l-bar-fixed");
        }
        });
        //Header Sticky Script End
		$(document).bind("resize", function () {
			var documentH = $(document).innerHeight();
			//var headerH = $('.l-loggedin-nav').outerHeight();
			var footerH = $('#footer').outerHeight();
			//var k = 70;
			var mainHeight = documentH - footerH;

			$('.l-main-panel').css("min-height", mainHeight);

		}).trigger("resize"); 
    }

};


