
$(function() {
	$(window).scroll(function() {
		var url = $('.pagination .next_page').attr('href');
		if ( url && $(window).scrollTop() >= $(document).height() - $(window).height() ) {
			$('.pagination').text('Fetching more products');
			// alert("This works");
			return $.getScript(url);
		}
	});
	return $window.scroll();
});
