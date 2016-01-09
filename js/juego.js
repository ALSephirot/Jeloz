$(document).ready(function(){

})

var Ccabeza = $(".contenedor-cabeza")
var Ctorso = $(".contenedor-torso")
var Cpiernas = $(".contenedor-piernas")
var Ctenis = $(".contenedor-tenis")
var Cfondo = $(".contenedor-fondo")

function contenedor_cabeza(){
	$(".contenedor-cabeza").show()
	$(".contenedor-torso").hide()
	$(".contenedor-piernas").hide()
	$(".contenedor-tenis").hide()
	$(".contenedor-fondo").hide()

	$(".senalador").css({left:'8%'})
}

function contenedor_torso(){
	$(".contenedor-cabeza").hide()
	$(".contenedor-torso").show()
	$(".contenedor-piernas").hide()
	$(".contenedor-tenis").hide()
	$(".contenedor-fondo").hide()

	$(".senalador").css({left:'28%'})
}

function contenedor_piernas(){
	$(".contenedor-cabeza").hide()
	$(".contenedor-torso").hide()
	$(".contenedor-piernas").show()
	$(".contenedor-tenis").hide()
	$(".contenedor-fondo").hide()

	$(".senalador").css({left:'48%'})
}

function contenedor_tenis(){
	$(".contenedor-cabeza").hide()
	$(".contenedor-torso").hide()
	$(".contenedor-piernas").hide()
	$(".contenedor-tenis").show()
	$(".contenedor-fondo").hide()

	$(".senalador").css({left:'68%'})
}

function contenedor_fondo(){
	$(".contenedor-cabeza").hide()
	$(".contenedor-torso").hide()
	$(".contenedor-piernas").hide()
	$(".contenedor-tenis").hide()
	$(".contenedor-fondo").show()

	$(".senalador").css({left:'88%'})
}