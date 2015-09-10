function abrirpopupdescarga(){
	$(".light-cubo").show();
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