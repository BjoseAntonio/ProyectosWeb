// Clases 

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El nombre del producto ${this.nombre} es de un precio de ${this.precio}`;
    }

}

 const producto2 = new Producto('Monitor', 4500);
 const producto3 = new Producto('Tablet', 6700);

 console.log(producto2);
 console.log(producto2.formatearProducto())
 