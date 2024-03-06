
const carrito = [
    {nombre: 'Laptop', precio: 50},
    {nombre: 'Monitor', precio: 10},
    {nombre: 'Pc', precio: 20},
    {nombre: 'Lapiz', precio: 30},
    {nombre: 'Teclado', precio: 550},
    {nombre: 'Luz led', precio: 56},
];


//while loop
let indice = 0;
while(indice <= 10){
    if(indice % 2 === 0){
        console.log(`El numero ${indice} es par`);
    }

    indice++;
}

// while(indice < carrito.length){
//     console.log(carrito[indice].nombre);
//     indice++;
// }


//Do while loop 
let i = 0;

do{
    console.log(i);
    i++;
}while( i < 10);