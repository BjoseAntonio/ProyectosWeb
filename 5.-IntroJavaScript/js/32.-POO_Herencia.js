class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} es de un precio ${this.precio}`;
    }

}

// herencia 
class pantallas extends Producto{ //extends: realizamos la herencia de una clase
    constructor(nombre, precio, pulgadas){
        super(nombre, precio); //seper: nos ayuda a reutilizar los parametros existentes dentro del constructor Producto
        this.pulgadas = pulgadas;
    }

    formatearProducto(){
        return `${super.formatearProducto()} y tiene ${this.pulgadas}" pulgadas`;//super.metodo(): Utiliza la descripción ya creada para después reasignar más descripción. 
    }
}

const producto = new Producto('monitor', 560);
const pantalla = new pantallas('Curvo', 5600, 20);

console.log(producto.formatearProducto());
console.log(pantalla.formatearProducto());