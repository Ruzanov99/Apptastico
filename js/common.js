/*Слайдер работ*/
$(document).ready(function(){
	$('.slider-partners').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  arrows: false,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  slidesToShow: 5,
	  slidesToScroll: 5,
	  responsive: [
    	{
	        breakpoint: 1024,
	        settings: {
		        slidesToShow: 4,
		        slidesToScroll: 4,
		        infinite: true,
		        dots: false
	      	}
    	},
    	{
	      	breakpoint: 768,
	      	settings: {
		        slidesToShow: 3,
		        infinite: true,
		        slidesToScroll: 3
      		}
    	},
    	{
		    breakpoint: 480,
		    settings: {
        		slidesToShow: 2,
        		infinite: true,
        		slidesToScroll: 2
      		}
    	}
  	]
});
	$('.slider-works').slick({
  		arrows: true,
  		nextArrow: '<span class="fa fa-chevron-circle-right" aria-hidden="true"></span>',
        prevArrow: '<span class="fa fa-chevron-circle-left" aria-hidden="true"></span>',
  		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 4,
  		autoplay: false,
  		autoplaySpeed: 3000,
		responsive: [
		{
	      breakpoint: 1091,
	      settings: {
	        arrows: false,
	        autoplay: true
      	  }
    	},
   		{
	        breakpoint: 1024,
	        settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        arrows: false,
		        autoplay: true,
		        infinite: true
      		}
    	},
    	{
		    breakpoint: 768,
		    settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        arrows: false,
		        autoplay: true,
		        infinite: true
      		}
    	},
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,
	        autoplay: true,
	        infinite: true
	      	}
    	}
    ]
});
	$( ".button-bars" ).click(function() {
		$( ".navigation" ).slideToggle(1000, function() {
		});
	});
});