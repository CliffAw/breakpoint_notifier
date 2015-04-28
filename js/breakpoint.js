$(window).on('load resize', function () {

	var $window_width = $(window).width(),
		$current_size = $('[data-bp]');

	$current_size.empty().append($window_width, "px");

});
