(function(){


// -- CENTRADO VERTICAL DEL FORMULARIO -- //

// FUNCIONES
var seteo = function(){
	var alturaPantalla = window.innerHeight - 100;
	var alturaTitulo = document.getElementById("titulo").clientHeight;
	var margen = (alturaPantalla - alturaTitulo) / 2 ;

	document.getElementById("titulo").style.marginTop = margen+"px";
	document.getElementById("titulo").style.marginBottom = margen+"px";
};

// EVENTOS
seteo();
window.addEventListener("resize", seteo);

}())