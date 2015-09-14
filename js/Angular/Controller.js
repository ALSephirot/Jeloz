angular.module("JelozApp", [])
.factory("JelozService",function($http){
	var Result = {};
	
	Result.GetRedes = function(CallBack, onError){
		$http.get("../../Datos/diccionario.json")
		.success(function (data, status, headers, config) {
            CallBack(data.RecursosJeloz.Redes);
        })
        .error(function (data, status, headers, config) {
            onError(data);
        });
	};
	
	Result.GetImagenes = function(CallBack, onError){
		$http.get("../../Datos/diccionario.json")
		.success(function (data, status, headers, config) {
            CallBack(data.RecursosJeloz.Multimedia.Imagenes);
        })
        .error(function (data, status, headers, config) {
            onError(data);
        });
	};
	
	Result.GetVideos = function(CallBack, onError){
		$http.get("../../Datos/diccionario.json")
		.success(function (data, status, headers, config) {
            CallBack(data.RecursosJeloz.Multimedia.Videos);
        })
        .error(function (data, status, headers, config) {
            onError(data);
        });
	};
	
	Result.GetWallPapers = function(CallBack, onError){
		$http.get("../../Datos/diccionario.json")
		.success(function (data, status, headers, config) {
            CallBack(data.RecursosJeloz.WallPapers);
        })
        .error(function (data, status, headers, config) {
            onError(data);
        });
	};
	
	Result.GetCanciones = function(CallBack, onError){
		$http.get("../../Datos/diccionario.json")
		.success(function (data, status, headers, config) {
            CallBack(data.RecursosJeloz.EmisoraOnline);
        })
        .error(function (data, status, headers, config) {
            onError(data);
        });
	};
	
	return Result;
})
.controller("RedesCtrl",function($scope,JelozService){
	var CallBackR = function(Data){
		$scope.Redes = Data;
	};
	
	var onErrorR = function (Data){
		alert(JSON.stringify(Data));
	}
	
	JelozService.GetRedes(CallBackR,onErrorR);
	
	
})
.controller("ImagenesCtrl",function($scope,JelozService){
	var CallBackR = function(Data){
		$scope.Imagenes = Data;
	};
	
	var onErrorR = function (Data){
		alert(JSON.stringify(Data));
	}
	
	JelozService.GetImagenes(CallBackR,onErrorR);
})

.controller("VideosCtrl",function($scope,JelozService){
	var CallBackR = function(Data){
		$scope.Videos = Data;
	};
	
	var onErrorR = function (Data){
		alert(JSON.stringify(Data));
	}
	
	JelozService.GetVideos(CallBackR,onErrorR);
})

.controller("WallPapersCtrl",function($scope,JelozService){
	var CallBackR = function(Data){
		$scope.WallPapers = Data;
	};
	
	var onErrorR = function (Data){
		alert(JSON.stringify(Data));
	}
	
	JelozService.GetWallPapers(CallBackR,onErrorR);
})

.controller("EmisoraCtrl",function($scope,JelozService){
	var CallBackR = function(Data){
		$scope.Canciones = Data;
	};
	
	var onErrorR = function (Data){
		alert(JSON.stringify(Data));
	}
	
	$scope.ClickCancion = function(ImagenCancion){
		
		$("#Reproductor").attr("src",ImagenCancion.Cancion.LinkCancion);
		$(".titulo-cancion").html(ImagenCancion.Cancion.Nombre)
	}
	
	JelozService.GetCanciones(CallBackR,onErrorR);
})