// Iteraciones 

//Ejemplo imprimir en consola por cierta cantidad, creando varias impreciones en asignacion del codigo 
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);


//con la iteraciones nos facilita las impreciones o exprarar mas en los datos facilmente y llegar hasta el objetivo que se requiere 
//For loop
// for(let i = 1; i <= 100; i++){
//     if( i % 2 === 0){
//         console.log(`El numero ${i} es par`)
//     }else{
//         console.log(`numero ${i} impar`)
//     }
// }   


const carrito = [
    {nombre: 'Laptop', precio: 50},
    {nombre: 'Monitor', precio: 10},
    {nombre: 'Pc', precio: 20},
    {nombre: 'Lapiz', precio: 30},
    {nombre: 'Teclado', precio: 550},
    {nombre: 'Luz led', precio: 56},
];

for(let i = 0;  i < carrito.length; i++){
    console.log(carrito[i].precio)
}


