const numeros = [10,34,5,6,80];

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

//Agregar 
numeros[5] = 60; //Posiciona en el indice 5 el valor 60, esta forma de agregar no es muy común. Para ello es mejor utilizar push. 

//Agregacion al final del arreglo 
numeros.push(50,40,60,28);

//Agrega al principiol del arreglo 
numeros.unshift(-10,-20,-30);
console.log(numeros);

const colores = ['Rojo', 'Amarillo', 'Negro', 'Morado', 'Naranja', 'Verde', 'Azul'];
// console.table(colores);

colores.pop(); //Elimina el ultimo elemento 
colores.shift(); //Elimina el primer elemento
colores.splice(2, 1);//Elimacion por seccion es decir, colas el número del indice y luego cuantos elementos despues del indice seran eliminados (colores.splice(Idice_Elemento, Cantidad_Elimiacion_Elemento(s) ))
console.table(colores);  


//Es recomendable no modificar un arreglo, si lo es asi es mejor crear uno
//Rest Operator o Spread Operator ==> Con ello creamo un nuevo arreglo 
 const nuevoArrrglo = ['Blanco', ...colores, 'Gris']; //El oreden de agregacion simula los métodos de .push() y .unshift() 
 console.table(nuevoArrrglo);