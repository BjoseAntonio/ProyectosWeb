//Declaración de la función   
function suma(){
    console.log(10+10);
}

suma();

//Expresión de la función 
const suma2 = function(){
    console.log(3 + 4);
}

suma2();

//IIFE (Immediately Invoked Function Expression),  una función que se declara y se invoca inmediatamente después de su definición.
(function(){
 console.log('Esta es una función');
})();
