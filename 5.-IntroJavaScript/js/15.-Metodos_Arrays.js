const numeros = [10,34,5,6,80];

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

//Agregar 
numeros[5] = 60; //Posiciona en el indice 5 el valor 60, esta forma de agregar no es muy común. Para ello es mejor utilizar push. 

//Agregacion al final del arreglo 
numeros.push(50,40,60,28);

//Agrega al principiol del arreglo 
numeros.unshift(-10,-20,-30);


console.log(numeros)