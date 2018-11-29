$(document).ready(function() {

	$("#arrow_pic1").click(function() {
		$("html, body").animate({scrollTop: $("#container1").offset().top})
	});

	$("#arrow_pic2").click(function() {
		$("html, body").animate({scrollTop: $("#container2").offset().top})
	});

})