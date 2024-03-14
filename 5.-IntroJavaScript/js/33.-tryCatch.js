//Aprueba de errores, mas no siempre se debe de utilizar en el codigo. 
//Su uso son en casos muy especificos como autenticacion de acceso, transacciones, acceso a la base de datos

const num1 = 34;
const num3 = 78;


console.log(num1);

try{
    console.log(num2);
}catch(errror){
    console.log(errror);
}

console.log(num3);