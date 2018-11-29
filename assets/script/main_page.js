$(document).ready(function() {

	$("#link1").hover(
		function () {
			$("#link_text1").css({
				"-webkit-transform" : "translate(-4.5vw, 50%)",
				"visibility" : "visible",
				"opacity" : "1",
				"-webkit-transition" : "transform 0s, visibility 1s, opacity 1s",
			});
		},
		function () {
			$("#link_text1").css({
				"-webkit-transform" : "translate(4.5vw, -50%)",
				"visibility" : "hidden",
				"opacity" : "0",
				"-webkit-transition" : "transform 2s, visibility .5s, opacity .5s",
			});
		}
	)

	$("#link2").hover(
		function () {
			$("#link_text2").css({
				"-webkit-transform" : "translate(-4.4vw, 50%)",
				"visibility" : "visible",
				"opacity" : "1",
				"-webkit-transition" : "transform 0s, visibility 1s, opacity 1s",
			});
		},
		function () {
			$("#link_text2").css({
				"-webkit-transform" : "translate(4.4vw, -50%)",
				"visibility" : "hidden",
				"opacity" : "0",
				"-webkit-transition" : "transform 2s, visibility .5s, opacity .5s",
			});
		}
	)

	$("#link3").hover(
		function () {
			$("#link_text3").css({
				"-webkit-transform" : "translate(-4.7vw, 50%)",
				"visibility" : "visible",
				"opacity" : "1",
				"-webkit-transition" : "transform 0s, visibility 1s, opacity 1s",
			});
		},
		function () {
			$("#link_text3").css({
				"-webkit-transform" : "translate(4.7vw, -50%)",
				"visibility" : "hidden",
				"opacity" : "0",
				"-webkit-transition" : "transform 2s, visibility .5s, opacity .5s",
			});
		}
	)

	$("#link4").hover(
		function () {
			$("#link_text4").css({
				"-webkit-transform" : "translate(-4.5vw, 50%)",
				"visibility" : "visible",
				"opacity" : "1",
				"-webkit-transition" : "transform 0s, visibility 1s, opacity 1s",
			});
		},
		function () {
			$("#link_text4").css({
				"-webkit-transform" : "translate(4.5vw, -50%)",
				"visibility" : "hidden",
				"opacity" : "0",
				"-webkit-transition" : "transform 2s, visibility .5s, opacity .5s",
			});
		}
	)

	$("#cloud1_box").hover(
		function() {
			$("#small_circle1").css({
				"opacity" : "1",
				"-webkit-transition" : "opacity 3s"
			});
			$("#med_circle1").css({
				"opacity" : "1",
				"-webkit-transition" : "opacity 2s",
				"-webkit-transition-delay" : ".25s"
			});
			$("#big_circle1").css({
				"opacity" : "1",
				"-webkit-transition" : "opacity 1s",
				"-webkit-transition-delay" : ".5s"
			});
			$("#me1").css({
				"opacity" : "1",
				"-webkit-transition" : "opacity 1s"
			});
			$("#photos_label").css({
				"opacity" : "0",
				"-webkit-transition" : "opacity 1s"
			});
			$("#photos_text").css({
				"opacity" : "1",
				"-webkit-transition" : "opacity 1.5s"
			});
		},
		function() {
			$("#big_circle1").css({
				"opacity" : "0",
				"-webkit-transition" : "opacity .5s",
			});
			$("#med_circle1").css({
				"opacity" : "0",
				"-webkit-transition" : "opacity .5s",
				"-webkit-transition-delay" : ".2s",
			});
			$("#small_circle1").css({
				"opacity" : "0",
				"-webkit-transition" : "opacity .5s",
				"-webkit-transition-delay" : ".4s",
			});
			$("#me1").css({
				"opacity" : "0",
				"-webkit-transition" : "opacity 1s"
			});
			$("#photos_label").css({
				"opacity" : "1",
				"-webkit-transition" : "opacity 1.5s"
			});
			$("#photos_text").css({
				"opacity" : "0",
				"-webkit-transition" : "opacity 1s"
			});
		}
	)

	$("#cloud2_box").hover(
		function() {
			$("#small_circle2").css({
				"opacity" : "1",
				"-webkit-transition" : "opacity 3s"
			});
			$("#med_circle2").css({
				"opacity" : "1",
				"-webkit-transition" : "opacity 2s",
				"-webkit-transition-delay" : ".25s"
			});
			$("#big_circle2").css({
				"opacity" : "1",
				"-webkit-transition" : "opacity 1s",
				"-webkit-transition-delay" : ".5s"
			});
			$("#me2").css({
				"opacity" : "1",
				"-webkit-transition" : "opacity 1s"
			});
			$("#projects_label").css({
				"opacity" : "0",
				"-webkit-transition" : "opacity 1s"
			});
			$("#projects_text").css({
				"opacity" : "1",
				"-webkit-transition" : "opacity 1.5s"
			});
		},
		function() {
			$("#big_circle2").css({
				"opacity" : "0",
				"-webkit-transition" : "opacity .5s",
			});
			$("#med_circle2").css({
				"opacity" : "0",
				"-webkit-transition" : "opacity .5s",
				"-webkit-transition-delay" : ".2s",
			});
			$("#small_circle2").css({
				"opacity" : "0",
				"-webkit-transition" : "opacity .5s",
				"-webkit-transition-delay" : ".4s",
			});
			$("#me2").css({
				"opacity" : "0",
				"-webkit-transition" : "opacity 1s"
			});
			$("#projects_label").css({
				"opacity" : "1",
				"-webkit-transition" : "opacity 1.5s"
			});
			$("#projects_text").css({
				"opacity" : "0",
				"-webkit-transition" : "opacity 1s"
			});
		}
	)

	$("#cloud3_box").hover(
		function() {
			$("#small_circle3").css({
				"opacity" : "1",
				"-webkit-transition" : "opacity 3s"
			});
			$("#med_circle3").css({
				"opacity" : "1",
				"-webkit-transition" : "opacity 2s",
				"-webkit-transition-delay" : ".25s"
			});
			$("#big_circle3").css({
				"opacity" : "1",
				"-webkit-transition" : "opacity 1s",
				"-webkit-transition-delay" : ".5s"
			});
			$("#me3").css({
				"opacity" : "1",
				"-webkit-transition" : "opacity 1s"
			});
			$("#about_label").css({
				"opacity" : "0",
				"-webkit-transition" : "opacity 1s"
			});
			$("#about_text").css({
				"opacity" : "1",
				"-webkit-transition" : "opacity 1.5s"
			});
		},
		function() {
			$("#big_circle3").css({
				"opacity" : "0",
				"-webkit-transition" : "opacity .5s",
			});
			$("#med_circle3").css({
				"opacity" : "0",
				"-webkit-transition" : "opacity .5s",
				"-webkit-transition-delay" : ".2s",
			});
			$("#small_circle3").css({
				"opacity" : "0",
				"-webkit-transition" : "opacity .5s",
				"-webkit-transition-delay" : ".4s",
			});
			$("#me3").css({
				"opacity" : "0",
				"-webkit-transition" : "opacity 1s"
			});
			$("#about_label").css({
				"opacity" : "1",
				"-webkit-transition" : "opacity 1.5s"
			});
			$("#about_text").css({
				"opacity" : "0",
				"-webkit-transition" : "opacity 1s"
			});
		}
	)

	$("#cloud1_box, #cloud_pic1, #photos_label, #photos_text").click(function() {
		window.location.href = "photos.html";
	})

	$("#cloud2_box, #cloud_pic2, #projects_label, #projects_text").click(function() {
		window.location.href = "projects.html";
	})

	$("#cloud3_box, #cloud_pic3, #about_label, #about_text").click(function() {
		window.location.href = "about.html";
	})
	
	
})