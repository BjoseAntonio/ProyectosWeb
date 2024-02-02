//Arreglos o Arrays
const numero = [10, 20, 30, 40, 50];

console.log(numero);
console.table(numero);

//Constructor
// const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

console.log(meses);
console.table(meses);
S
const arreglo = ['hola', 19, 'jos', true, null, {nombre: 'san', edad: 10}, [13,56,87]];
console.log(arreglo);
console.table(arreglo);

//Acceder valores de un arreglo 
console.log(numero[3]);

// Conocer la extencion del arreglo
console.log(numero.length);

//Para recorre cada uno de los arreglos 
meses.forEach(function(mes){
    console.log(mes)
})