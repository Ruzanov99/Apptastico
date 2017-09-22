$( document ).ready(function() {
	if ($(".navigation").hasClass("hide")) {
		$(".button-bars").click(function () {
			$(".navigation").removeClass("hide");
			
		});
	}else{
		$(".button-bars").click(function () {
			$(".navigation").addClass("hide");
		});
		} 
	
	$( ".button-bars" ).click(function() {
		$( ".navigation" ).slideToggle(1000, function() {
		});
	});
});
