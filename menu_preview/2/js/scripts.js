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
	$("#menu ul li").each(function(i) {
		if (i != 0) {
			$("#beep-two").clone().attr("id", "beep-two" + i).appendTo($(this).parent());
		}
		$(this).data("beeper", i);
	  })
	.mouseenter(function() {
		$("#beep-two" + $(this).data("beeper"))[0].play();
	});
	$("#beep-two").attr("id", "beep-two0");
});