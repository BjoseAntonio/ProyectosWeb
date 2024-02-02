//Unir dos objetos
//Es recomendable al unir objetos es no modificar 

const producto = {
    id : 23,
    nombre : "Cortadora de cabello"
}

const medida  = {
    peso : "1.5 kg",
    altura: "0.12 m"
}


//Exiten dos métodos comunes
const nuevoProducto = {...producto, ...medida};//Operador de propagación
const nuevoProducto2 = Object.assign({}, producto, medida);

console.log(producto);
console.log(nuevoProducto);
console.log(nuevoProducto2);