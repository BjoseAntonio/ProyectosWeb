
const carrito = [
    {nombre: 'Laptop', precio: 50},//Objeto
    {nombre: 'Monitor', precio: 10},
    {nombre: 'Pc', precio: 20},
    {nombre: 'Lapiz', precio: 30},
    {nombre: 'Teclado', precio: 550},
    {nombre: 'Luz led', precio: 56},
];//Arreglo


//Son utilizados en arreglos 
//ForEach
carrito.forEach(function(producto){//fuction
    console.log(producto.nombre);
});


carrito.forEach(producto1 => console.log(producto1.nombre)); //arrow fuction


//map ayuda a crear un nuevo arreglo
carrito.map(producto1 => console.log(producto1.nombre)); //arrow fuction

const arreglo = carrito.map(producto2 => `${producto2.nombre} - ${producto2.precio}`);
console.log(arreglo);
