//Una declaración para activar el modo estricto rn un script o función, ayuda a prevenir errores comunes y a escribir un código más seguro. 
// "use strict";
//Objetos 

const producto = {
    nombreProcuto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}
// Object.freeze(producto); //Es un método esto hace que el objeto sea "inmutable" o "no modificable", siendo haci un objeto estático. 

Object.seal(producto)//Es similar a Object.freezen() pero Objetct.seal() te permite Modificar 

producto.imagen = "imagen.png"; //Añadir 
producto.precio = 400; //Modificar
delete producto.disponible; //Eliminar 

// console.log(Object.isFrozen(producto));
console.log(Object.isSealed(producto))
console.log(producto);