// sin prototypes
// const producto = {
//     nombre: 'Monitor',
//     precio: 5500
// };

// function Producto(nombre, precio){
//     this.nombre = nombre;
//     this.precio = precio;
// }

// const producto1 = new Producto('Tablet', 3500);

// function formatearProducto(producto){
//     return `El producto ${producto.nombre} tiene un precio de ${producto.precio}`;
// }

// console.log(formatearProducto(producto1));



// Prototypes
//ObjectConstructor
//Productos
function Producto(nombre, precio, disponibilidad){
    this.nombre = nombre;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
}
//Crear funciones que solo se utilian en un objeto en especifico
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de $${this.precio} mx`;
}

//Cliente
function Cliente(nombre, apellido /*edad*/){
    this.nombre = nombre;
    this.apellido = apellido;
    // this.edad = edad;
}
Cliente.prototype.formatearCliente = function(){
    return `El cliente ${this.nombre} ${this.apellido}  a realizado una compra`/*${this.edad}*/;
}


// Declaracion de constante con instantancio de un objeto 
//Declaracion de constantes 
const datosProducto1 = new Producto('Tablet', 2500, true);
const cliente1 = new Cliente('edwin', 'duran');

//llamada al método 
console.log(datosProducto1.formatearProducto());
console.log(cliente1.formatearCliente());