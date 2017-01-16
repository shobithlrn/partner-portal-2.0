navigation = {
	tabsRollerover: function() {
		 var $el, leftPos, newWidth,
		$mainNav = $(".l-sub-nav");
    
		$mainNav.append("<li id='l-active-line'></li>");
		var $activeLine = $("#l-active-line");
		
		$activeLine		
			.width($(".l-sub-nav li a").innerWidth())
			.css("left", $(".l-sub-nav li").position().left)
			.data("origLeft", $activeLine.position().left)
			.data("origWidth", $activeLine.width());
			
		$(".l-sub-nav li a").click(function() {
			$activeLine.stop().animate({
				left: $(this).position().left,
				width: $(this).innerWidth()			
		   });
			$(this).parent().siblings().removeClass("l-current_page");
			$(this).parent().addClass("l-current_page");
		});
	}
};