const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
//Arreglo
const carrito = [
    //Objetos
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'TV 50 pulgadas', precio: 5600},
    {nombre: 'Celular 5 pulgadas', precio: 600},
    {nombre: 'Laptop 16 pulgadas', precio: 400},
    {nombre: 'Audifonos', precio: 5400},
    {nombre: 'Sensor lacer', precio: 5300},
    {nombre: 'Tablet 10 pulgadas', precio: 5400},
    {nombre: 'switch', precio: 5300}
];

//forEach
meses.forEach(function(mes){
    if( mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//Es lo mismo comprobar con un 
//Includes
let  resultado = meses.includes('Marzo');

//Some ideal para arreglos de objetos, esto verifica si exite el objeto 
resultado = carrito.some(function(producto){
        return producto.nombre === 'switch'
});

//Reduce, ayuda a sacar la suma total del carrito. Es logico que es utilizado por numeros.
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);

//Filter
resultado = carrito.filter(producto => producto.precio > 5400);

resultado = carrito.filter(function(producto){
    // return producto.nombre === 'switch'
    return producto.nombre !== 'switch'
});


console.log(resultado);