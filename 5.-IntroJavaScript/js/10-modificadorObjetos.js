
//Creacion del objeto 
const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible :  true 
}

// console.log(producto);
// console.log(producto.disponible);

//Agregar nuevas propiedades al objeto 
producto.imagen = 'imagen.png';

//Eliminar una propiedad al objeto 
delete producto.disponible;

console.log(producto);
