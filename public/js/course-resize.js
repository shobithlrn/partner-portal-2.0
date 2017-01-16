courseResize = {
	setUniformCourseHeight: function(len) {
		var containerEle='.grid-group-item .thumbnail';
		var container=$(containerEle).slice(-1*len);
		var currentTallest = 0,
			currentRowStart = 0,
			rowDivs = new Array(),
			$el, topPosition = 0,index=0;
		$(container).each(function() {
			$el = $(this);
			$($el).height('auto')
			topPostion = this.parentNode.offsetTop;
			if (currentRowStart != topPostion) {
				rowDivs = []; // empty the array
				currentRowStart = topPostion;
				currentTallest = $el.height();
				rowDivs.push($el);
			} else {
				console.log('22222222222');
				rowDivs.push($el);
				currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
			}
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
		});
	},
	setCourseListHeight:function()
	{
		var container='.list-group-item .thumbnail';
		$(container).each(function() {
			$(this).css('height','auto'); 
		});
	}
	
	
};

/*$(window).load(function() {
	// Fix heights on page load
	courseResize.setUniformCourseHeight();

	// Fix heights on window resize
	var iv = null;
	$(window).resize(function() {

		if(iv !== null) {
			window.clearTimeout(iv);
		}

		// Needs to be a timeout function so it doesn't fire every ms of resize
		iv = setTimeout(function() {
				courseResize.setUniformCourseHeight();
		}, 120);
	});
});*/
// $(window).load(function() {
	// setTimeout(function(){ 
		// courseResize.setUniformCourseHeight();
	// }, 10);	
// });

// $(window).resize(function() {
	// courseResize.setUniformCourseHeight();
// });