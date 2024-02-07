//Retornación de valores en funciones 

function suma(n1 = 0, n2 = 0){
    return n1 + n2;
}

const resultado = suma(1,2);
console.log("Resultado:", resultado)


//Ejemplo articulos guardado en el carrito de compras 
let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);


console.log(total);

const totalApagar = calcularImpuesto(total);

console.log(`Total a pagar $${totalApagar}`);