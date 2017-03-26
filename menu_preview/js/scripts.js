$(document).ready(function() {
	function realigntext() {
		$('.segment').each(function() {
			this.style.lineHeight = $(this).height() + "px";
		});
		var count = $("#buttons ul").children().length;
		$('#buttons').css('line-height', ($('#buttons').height() / (2 * count)) + 'px')
	}
	realigntext();
	$(window).resize(function () {
		realigntext();
	});
});
function toggleError() {
	var element = '#errorbox-bg'
	if($(element).is(':hidden')) {
		$(element).fadeIn(200);
	} else {
		$(element).fadeOut(200);
	}
	$('.segment').each(function() {
		this.style.lineHeight = $(this).height() + "px";
	});
}
function toggleControls() {
	var element = '#controls-bg'
	if($(element).is(':hidden')) {
		$(element).fadeIn(200);
	} else {
		$(element).fadeOut(200);
	}
	$('.segment').each(function() {
		this.style.lineHeight = $(this).height() + "px";
	});
}