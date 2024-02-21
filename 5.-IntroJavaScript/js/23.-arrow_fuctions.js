//Arrow functions es utilizable en la expresión de la función 
//Expresión de la función 
const suma = function(n1, n2){
    console.log(n1 + n2);
}
suma(4,6);

//Arrow functions
const multiplicacion = (num1 = 0, num2 = 0) => console.log(num1 * num2);
multiplicacion(9,5);



const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];//Arreglo
meses.forEach( mes => { //Implementacion de arrow functions
    if(mes == 'Marzo'){
        console.log(`El mes de ${mes} si existe`);
    }
});


const carrito = [ //Arreglo dentro de ello creacion de objetos 
    {nombre: 'Teclado', precio: 460},
    {nombre: 'Monitor 25 pulgadas', precio: 4460},
    {nombre: 'Laptop', precio: 12500},
    {nombre: 'Libro', precio: 240},
    {nombre: 'Mouse', precio: 150},
    {nombre: 'Lapiz electronico', precio: 470}
];

//Some ideal para arreglos de objetos, esto verifica si exite el objeto 
let resultado = carrito.some(producto => /* return*/ producto.nombre === 'Teclado');//Implementacion de arrow functions


//Reduce, ayuda a sacar la suma total del carrito. Es logico que es utilizado por numeros.
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

//Filter con precio
resultado = carrito.filter(producto => producto.precio >800);


//filter de un producto 
resultado = carrito.filter(producto => producto.nombre !== 'Libro');
console.log(resultado);



