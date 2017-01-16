newTrialAccount = {
    setFunctionality: function () {



    // Navbar toggle
    $('.navbar-toggle').click(function(){ });
    var $pageSuvTab = $('.l-sub-nav li a');
    $pageSuvTab.click(function () {
        var index = $pageSuvTab.index($(this));
        $('.l-sub-tab-container .l-sub-tab-panel').hide().eq(index).fadeIn("slow");
        equalheight('.grid-group-item .thumbnail');
    }).eq(0).click();

    // Toggle All courses Mobile menu
    //$("#xs-cc-menu").click(function(){
    //	$("#l-all-courses").slideToggle("slow");
    //	$(".l-all-courses-dd").toggleClass("open");
    //});

    // Toggle function - Featured courses ST
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

    $('.l-cc-menu-wrapper span a').on('click', function(){
        if($(".l-cc-menu-wrapper").hasClass('l-slide-down')){
            $("#l-all-courses span a").removeClass("active");
            $(this).addClass('active');
            var bcTxt = $('#bcTopic a').text($(this).text());
            bcTxt.fadeIn("slow");
            $("#bcTopic").fadeIn("slow");
            $("#bcsubTopic").fadeOut("slow");
            $("#bcAllcourses").removeClass("active");
            $("#bcTopic").addClass("active");

            $('#sort-dd-topic').css( "display", "" );
            $('#sortCourses').text("Last Updated");
            $('#sort-dd').css( "display", "none" );
            $('#subtopicPanel').fadeIn("slow");
            $("#subtopicPanel li a").removeClass("active");
        }
        console.log($(this).text());
    });

    $('#bcAllcourses').on('click', function(){
        //$("#breadCrumb li").removeClass("active");
        $(this).addClass('active');
        $('.l-all-courses span a').removeClass('active');
        $('#sort-dd-topic').css( "display", "none" );
        $('#sort-dd').css( "display", "" );
        $('#sortCourses').text("Topic by Last Update");
        $("#bcTopic").fadeOut("slow");
        //$("#bcTopic li, #bcsubTopic li, ").addClass("active");
        $("#subtopicPanel").fadeOut("slow");
        $("#bcsubTopic").fadeOut("slow");
        $('#subtopicPanel').fadeOut("slow");
    });

    $('#bcTopic').on('click', function(){
        //$("#breadCrumb li").removeClass("active");
        $(this).addClass('active');
        //$("#bcsubTopic li").addClass("active");
        $("#bcsubTopic").fadeOut("slow");
        $('#subtopicPanel li a').removeClass("active");
    });

    $('#subtopicPanel li a').on('click', function(){
        $("#subtopicPanel li a").removeClass("active");
        $(this).addClass('active');
        var bcTxt = $('#bcsubTopic a').text($(this).text());
        var bcTxtCount = $('#bcsubTopic span').text($(this).next('span').text());
        $("#bcsubTopic").fadeIn("slow");
        $("#bcAllcourses").removeClass("active");
        $("#bcTopic").removeClass("active");
        $("#bcsubTopic").addClass("active");
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


    // Grid and List view toggle
    $('#list').click(function(event){
        event.preventDefault();
        $('.l-toggle-btn').find('a').removeClass('active-btn');$('#products .item').addClass('list-group-item');$(this).addClass('active-btn');
        equalheight('.grid-group-item .thumbnail');
    });
    $('#grid').click(function(event){
        event.preventDefault();
        $('.l-toggle-btn').find('a').removeClass('active-btn');
        $('#products .item').removeClass('list-group-item');
        $('#products .item').addClass('grid-group-item');$(this).addClass('active-btn');
        equalheight('.grid-group-item .thumbnail');
    });

    $('.l-bookmark-holds').click(function(){
        if($(this).find('i').hasClass('zmdi-bookmark')){
            $(this).find('i').removeClass('zmdi-bookmark').addClass('zmdi-bookmark-outline');
        }
        else if($(this).find('i').hasClass('zmdi-bookmark-outline')){
            $(this).find('i').removeClass('zmdi-bookmark-outline').addClass('zmdi-bookmark');
        }
    });

    // Trial Account field auto populate list
    $("#searchCompany, #openCompanySearch").click(function(event) {
        $("#searchCompanyfield").addClass("open");
        $("#searchCompanyfield .zmdi-chevron-down").addClass("hide");
        $("#searchCompanyfield .zmdi-close").removeClass("hide");
		$('#searchCompany').focus();
    });


        $('#searchCompany').keydown(function(e) {
            if(e.which == 40){
                if($("#selectAutoCompany li.active").length!=0) {
                    var storeTarget	= $('#selectAutoCompany').find("li.active").next();
                    $("#selectAutoCompany li.active").removeClass("active");
                    storeTarget.focus().addClass("active");
                }
                else {
                   $('#selectAutoCompany').find("li:first").focus().addClass("active");
                }
            }
            if(e.which == 38){
                if($("#selectAutoCompany li.active").length!=0) {
                    var storeTarget	= $('#selectAutoCompany').find("li.active").prev();
                    $("#selectAutoCompany li.active").removeClass("active");
                    storeTarget.focus().addClass("active");
                }
                else {
                    $('#selectAutoCompany').find("li:first").focus().addClass("active");
                }
            }
        });

       $("#selectAutoCompany").keydown(function(e){

           if(e.which == 13) {
               $("#searchCompanyfield").removeClass("open");
               $("#searchCompanyfield .zmdi-chevron-down").removeClass("hide");
               $("#searchCompanyfield .zmdi-close").addClass("hide");
               $("#searchCompany").val();
           }

           if(e.which == 40){
               if($("#selectAutoCompany li.active").length!=0) {
                   var storeTarget	= $('#selectAutoCompany').find("li.active").next();
                   $("#selectAutoCompany li.active").removeClass("active");
                   storeTarget.focus().addClass("active");
               }
               else {
                   $('#selectAutoCompany').find("li:first").focus().addClass("active");
               }
           }
           if(e.which == 38){
               if($("#selectAutoCompany li.active").length!=0) {
                   var storeTarget	= $('#selectAutoCompany').find("li.active").prev();
                   $("#selectAutoCompany li.active").removeClass("active");
                   storeTarget.focus().addClass("active");
               }
               else {
                   $('#selectAutoCompany').find("li:first").focus().addClass("active");
               }
           }

       })



    $('#selectAutoCompany li').on('click', function(){
        $("#selectAutoCompany li").removeClass("active");
        $(this).addClass('active');
        //var bcTxt = $('#searchCompany').text($(this).text());
        $("#searchCompanyfield").removeClass("open");
        var bcTxt = $('#searchCompany').val($(this).find('span').text());
        $("#searchCompanyfield .zmdi-close").addClass("hide");
        $("#searchCompanyfield .zmdi-chevron-down").removeClass("hide");
        $("#Industry").fadeIn("slow");
        $("#IndustrySize").fadeIn("slow");
    });

	// $("#openCompanySearch").click(function() {
        // $("#searchCompanyfield .zmdi-chevron-down").addClass("hide");
        // $("#searchCompanyfield .zmdi-close").removeClass("hide");
		// $('#searchCompany').focus();
        // $('#searchCompany').val();
    // });

    $("#closeCompanySearch, #selectAutoCompany").click(function() {
        $("#searchCompanyfield").removeClass("open");
        $("#searchCompanyfield .zmdi-chevron-down").removeClass("hide");
        $("#searchCompanyfield .zmdi-close").addClass("hide");
        $("#searchCompany").val();
    });

    // Create new account modal
	$('#newAccount').modal({
        "show": false,
		backdrop: 'static',   // This disable for click outside event
		keyboard: true        // This for keyboard event
	})
    $('#newAccount').on('hidden.bs.modal', function (e) {
		$('#newAccount .l-new-trial-form').find('input.form-control').val('');
		$('#newAccount .l-new-trial-form').find('#m-IndustryType-field').html('Select from list');
	})

	$('#newAccount').on('show.bs.modal', function (e) {
		$("#searchCompanyfield").removeClass("open");
        $("#searchCompanyfield .zmdi-chevron-down").removeClass("hide");
        $("#searchCompanyfield .zmdi-close").addClass("hide");
	})

    // Account flow

    $("#addContacts").click(function() {
        $("#step1").addClass("hide");;
        $("#step2").fadeIn();
        $("#wstep-2").addClass("l-in-progress");
        $("#wstep-1").addClass("l-complete");
        $("#wstep-1").removeClass("l-in-progress");
        $("#wstep-2").removeClass("l-incomplete");
    });

    /*
    $("#addContent").click(function() {
        $("#step2").addClass("hide");;
        $("#step3").fadeIn();
        $("#wstep-3").addClass("l-in-progress");
        $("#wstep-2").addClass("l-complete");
        $("#wstep-2").removeClass("l-in-progress");
        $("#wstep-3").removeClass("l-incomplete");
    });
    */

    $("#addanotherContact").click(function() {
        $('#addAcontact').fadeIn("slow");
    });

	$('.l-play-list-wrapper input[type=checkbox].checked-item').click(function(){
		var cnt = $(".checked-item:checked").length;
		if(cnt > 0) {
			$('#createAccount').prop('disabled', false);
		}
		else {
			$('#createAccount').prop('disabled', true);
		}

	});
    /*
    $("#createAccount").click(function() {
        $("#step3").addClass("hide");;
        $("#step4").fadeIn();
        $("#wstep-4").addClass("l-in-progress");
        $("#wstep-3").addClass("l-complete");
        $("#wstep-3").removeClass("l-in-progress");
        $("#wstep-4").removeClass("l-incomplete");
    });
    */

    $("#skipAccount").click(function() {
        $("#step3").addClass("hide");
        $("#step4").fadeIn();
        $("#wstep-4").addClass("l-in-progress");
        $("#wstep-3").addClass("l-complete");
        $("#wstep-3").removeClass("l-in-progress");
        $("#wstep-4").removeClass("l-incomplete");
    });

    // Filter panel ST
    $('.l-filter-panel li a').click(function(){
        if ($(this).next('div.l-filter-options').hasClass('l-close-panel')){
            $('.l-filter-options').removeClass('l-open-panel').addClass('l-close-panel');
            $('.l-filter-panel li a').find('i').removeClass('zmdi-minus').addClass('zmdi-plus');
            $(this).find('i').removeClass('zmdi-plus').addClass('zmdi-minus');
            $(this).next('div').removeClass('l-close-panel').addClass('l-open-panel');
            //$(this).addClass('l-factive');
        }
        else if ($(this).next('div.l-filter-options').hasClass('l-open-panel')){
            $('.l-filter-options').removeClass('l-open-panel').addClass('l-close-panel');
            $('.l-filter-panel li a').find('i').removeClass('zmdi-minus').addClass('zmdi-plus');
            $(this).find('i').removeClass('zmdi-minus').addClass('zmdi-plus');
            $(this).next('div').removeClass('l-open-panel').addClass('l-close-panel');
            //$(this).removeClass('l-factive');
        }
    });

    // New new account created modal
    // $('#newAccountCreated').popup({
        // type: 'overlay',
        // vertical: top,
        // escape: false,
        // blur: false,
        // scrolllock: true,
        // transition: 'all 0.3s'
    // });

    // // Select individual course modal
    // $('#selectCourse').popup({
        // type: 'overlay',
        // vertical: top,
        // escape: false,
        // blur: false,
        // scrolllock: true,
        // transition: 'all 0.3s'
    // });

    // Filter Mobile Function ST
    $('#filterTab').click(function(){
        $('#filterPanel').removeClass('l-filter-close').addClass('l-filter-open');
        $('#sortBy').removeClass('l-filter-open').addClass('l-filter-close');
    });
    $('#filteringDone').click(function(){
        $('#filterPanel').removeClass('l-filter-open').addClass('l-filter-close');
    });

    $('#CloseFilter').click(function(){
        $('#filterPanel').removeClass('l-filter-open').addClass('l-filter-close');
    });
    // Filter Mobile Function EN

    // Sort by function ST
    $('#sortTab').click(function(){
        $('#sortBy').removeClass('l-filter-close').addClass('l-filter-open');
        $('#filterPanel').removeClass('l-filter-open').addClass('l-filter-close');
    });

    $('#closeSort').click(function(){
        $('#sortBy').removeClass('l-filter-close').addClass('l-filter-open');
        $('#sortBy').removeClass('l-filter-open').addClass('l-filter-close');
    });
    // Sort by function EN

    //$('.summernote').summernote({
    //	airMode: true
    //});

    /*$("#summernote").click(function() {
        $('#summernote').summernote({
            toolbar: [
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['font', ['strikethrough', 'superscript', 'subscript']],
                ['fontsize', ['fontsize']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']]
            ]
        });
        //$('#summernote').summernote({focus: true});
        $('.note-editor').fadeIn("slow");
        $('#restoreDefault').fadeIn("slow");
        $('#summernote').slideUp("slow");
    });*/

    $("#restoreDefault").click(function() {
        $('.note-editor').slideUp();
        $('#summernote').slideDown("slow");
        $('#restoreDefault').fadeOut("slow");
    });

    $('#m-industrySize li span').on('click', function(){
        $(".dropdown-menu li").removeClass("active");
        $(".dropdown-menu li").removeClass("selected");
        $(this).parent().addClass('active');
        $('#m-industrySize-field').text($(this).text());
        console.log($(this).text());
    });
    $('#m-IndustryType li span').on('click', function(){
        $(".dropdown-menu li").removeClass("active");
        $(".dropdown-menu li").removeClass("selected");
        $(this).parent().addClass('active');
        $('#m-IndustryType-field').text($(this).text());
        //$('#m-industryType span').text($(this).find('span').text());
        console.log($(this).text());
    });

    $('#accDuration li span').on('click', function(){
        $(".dropdown-menu li").removeClass("active");
        $(".dropdown-menu li").removeClass("selected");
        $(this).parent().addClass('active');
        $('#accDuration-field').text($(this).text());
        //$('#m-industryType span').text($(this).find('span').text());
        if($(this).text() === 'Unlimited'){
            $( "#days").text($(this).text());
        }else{
            $( "#days").text(parseInt($(this).text().substr(0,3).trim()));
        }
        console.log($(this).text());
    });

	$("#lrnStarterKitList, #topLrnPlaylist").owlCarousel({
		loop:true,
		margin: 25,
		responsiveClass:true,
		autoPlay : false,
		baseClass : "owl-carousel",
		theme : "owl-theme",
		//stagePadding: 50,
		// Navigation
		nav : true,
		navigation : true,
		navText: ["<i class='zmdi zmdi-chevron-left'></i>","<i class='zmdi zmdi-chevron-right'></i>"],
		rewindNav : true,
		scrollPerPage : false,

		// Pagination
		pagination : true,
		paginationNumbers: false,

		// Lazy load
		lazyLoad : false,
		lazyFollow : true,
		lazyEffect : "fade",
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:true
			},
			1000:{
				items:3,
				nav:true,
				loop:false
			}
		}
	});



    }
}
