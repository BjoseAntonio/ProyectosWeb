//POO


//Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//Object Constructor
function Producto(nombre, precio, disponibilidad){
    this.nombre = nombre;
    this.precio = precio;
    this.disponibilidad = disponibilidad;

}

const producto1 = new Producto('Monitor', 1500, true);
const producto2 = new Producto('Tablet', 2000, false);
const producto3 = new Producto('Consola Xbox one', 6500, true);



console.log(producto1);
console.log(producto2);
console.log(producto3);
