//Funciones con parametros y argumentos 

function sumar(numero1, numero2){ //numero1, numero2 son parametros
    console.log(numero1 + numero2);
}
sumar(2, 5);//Argumentos dentro de la función son valores 

const sumar2 = function(n1, n2){
    console.log("Suma", n1 + n2);
    
}
sumar2(3,  5);



function restar(nu1 = 0, num2 = 0){ //Parametros por defaul esto ayuda en la falta de valores cuando un programa no es muy estricto con un valor asignar.
    console.log("La resta es: ", nu1 - num2);
}

restar(4)