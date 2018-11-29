$(document).ready(function() {

	$("#nav_home").click(function() {
		document.location.href = "index.html";
	})

	$("#nav_photos").click(function() {
		document.location.href = "photos.html";
	})

	$("#nav_projects").click(function() {
		document.location.href = "projects.html";
	})

	$("#nav_about").click(function() {
		document.location.href = "about.html";
	})

	$(".navbar_option_icon").click(function() {
		let active = $(this).hasClass("active");
		if (active) {
			$(".navbar_itm").css({
				"opacity" : "0",
				"-webkit-transition" : "opacity 1s, visibility 1s",
				"visibility" : "hidden"
			});
			$(this).removeClass("active");
			$(this).addClass("inactive");
		} else {
			$(".navbar_itm").css({
				"visibility" : "visible",
				"opacity" : "1",
				"-webkit-transition" : "opacity 1s"
			});
			$(this).removeClass("inactive");
			$(this).addClass("active");
		}
	})
})