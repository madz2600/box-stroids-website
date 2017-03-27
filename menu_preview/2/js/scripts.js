// BOX-stroids website functions
$(document).ready(function() {
	function realigntext() {
		$('.segment').each(function() {
			this.style.lineHeight = $(this).height() + "px";
		});
		var count = $("#menu ul").children().length;
		$('#menu ul').css('line-height', ($('#menu ul').height() / ((3/2) * count)) + 'px')
	}
	realigntext();
	$(window).resize(function () {
		realigntext();
	});
});