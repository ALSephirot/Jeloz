function abrirpopupdescarga(imagen){
	$(".light-cubo").show();
	var Celular = $(imagen).attr("data-celular");
	var Tablet = $(imagen).attr("data-tablet");
	var PC = $(imagen).attr("data-pc");
	$(".pantalla-cel").css("background","url(../"+Celular+") no-repeat")
	$(".pantalla-pc").css("background","url(../"+PC+") no-repeat")
	$(".pantalla-tablet").css("background","url(../"+Tablet+") no-repeat")
	
	$(".boton-descargar-cel").attr("href",Celular)
	$(".boton-descargar-pc").attr("href",PC)
	$(".boton-descargar-tablet").attr("href",Tablet)
	
	setTimeout(function(){
		$(".light-cubo").css({opacity:1})
	}, 50);
}

function cerrarpopupdescarga(){
	$(".light-cubo").css({opacity:0})
	setTimeout(function(){
		$(".light-cubo").hide();
	}, 500);
	
}