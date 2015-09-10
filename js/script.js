$(document).ready(function(){

	var altura = $(window).height()
	$(".header").css({height:altura})

	var sencillosPosition = $('#sencillos').offset().top - 300
	var contenedor_galeria_imagenesPosition = $('.contenedor_galeria_imagenes').offset().top - 500
	var contenedor_galeria_videosPosition = $('.contenedor_galeria_videos').offset().top - 500
	var formularioPosition = $('.formulario').offset().top - 500

	var alto = $('#menu').offset().top

	$(window).on('scroll',function(){

		if ($(window).scrollTop() > sencillosPosition){
			$('.video-sencillo1').addClass('on')
			$('.video-sencillo1').removeClass('off-left')
			$('.video-sencillo2').addClass('on')
			$('.video-sencillo2').removeClass('off-right')
		};

		if ($(window).scrollTop() > contenedor_galeria_imagenesPosition){
			$('.contenedor_galeria_imagenes').addClass('on')
			$('.contenedor_galeria_imagenes').removeClass('off-bottom')
		};

		if ($(window).scrollTop() > contenedor_galeria_videosPosition){
			$('.contenedor_galeria_videos').addClass('on')
			$('.contenedor_galeria_videos').removeClass('off-bottom')
		};

		if ($(window).scrollTop() > formularioPosition){
			$('.formulario').addClass('on')
			$('.formulario').removeClass('off-bottom')
		};


		if ($(window).scrollTop() > alto){
			$('#menu').addClass('navbar-fixed-top')
			$("html").css({'padding-top': 100})
		}else{

			$('#menu').removeClass('navbar-fixed-top')
			$("html").css({'padding-top': 0})

		}
	}) // pegar menu




	setTimeout(function(){
		$(".header").animate({opacity:1}, 1000, "easeOutSine")
	}, 100);

	setTimeout(function(){
		$(".logo_header, .jeloz_header").animate({opacity:1, top:0}, 800, "easeOutCubic",
			function(){
				$(".redes").animate({opacity:1,bottom: 20}, 800, "easeOutCubic")

			})

	}, 1500);

	
$('.image-link').magnificPopup({ 
  type: 'image',
  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function 

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }

});


}) //document ready

$(document).ready(function(){
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .stop().animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});


