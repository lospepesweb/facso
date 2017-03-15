/*-------------------------------------------------------------------------*/

/* var sabores = ["carne","pollo","jamón"];

sabores[3] = "cebolla";

console.log(sabores);

var sabor_elegido = sabores[2]

console.log(sabor_elegido);*/

/*------------------------------------------------------------------------*/

/*var sabores_de_empanada = ["carne", "pollo", "verdura", "cebolla", "jamón y queso", "queso y cebolla", "pollo al verdeo", "queso azul", "carne dulce", "carne picante"];

for(var i=0; i < sabores_de_empanada.length; i++){
  console.log(i);
  console.log(sabores_de_empanada[i]);
}*/

/*-----------------------------------------------------------------------*/

/*function armarMensajeDelSaludo(nombre, apellido){
  var mensaje = "Hola " + nombre + " " + apellido;
  return mensaje;
}

alert( armarMensajeDelSaludo("Juana", "Molina") )*/

/**---------------------------------------------------------------------*/

var usuario = {
  nombre: "Juan", 
  edad: 31,
  apellido: "Pérez",
  saludar: function(){
    alert("Hola " + this.nombre);
  }
};

// Ejecutar la función:
usuario.saludar();

/*-----------------------------------------------------------------------*/
/* un obj televisor que tiene una propiedad vida util en minutos con valor 50000, 
cada vez que se enciende, disminuye su vida util en 2 mins */

var televisor = {
vidaUtilEnMinutos: 50000
};

televisor.encender = function() {
 this.vidaUtilEnMinutos -= 2
};