// String o cadenas de texto
const producto  = 'Monitor de 20" Pulgadas'; //Forma comun de crear un string
const producto2 = String("Monitos de 30\" Plugadas") //Crear variable con declaracion del tipo de dato 'string'
const producto3 = new String('Monito de 50 Pulgadas') //Crear un objeto mediante un constructor 

console.log(producto)
console.log(producto2)
console.log(producto3) 
console.log(typeof producto3) //Nos muestra tipo de dato 



// Metodos para los string 
const producto_1 = 'Monitor de 20" '
const prodcuto_2 = "Monitor HD"
const tweet = 'Escrito mi primer tweet para desarrollo web donde aprenderemos a crear paginas'

//length nos permite saber la cantidad de palabras de una cadena 
console.log(producto_1.length); //length nos permite mostrarnos la cantidad de palabras que contiene la cadena 

// indexOf nos permite saber la posicion de la palabra en una cadena 
console.log(tweet.indexOf('tweet'))
console.log(tweet.indexOf('monitor')) //cuando nos imprime un numero negativo es porque no existe el valor asignado. Tiene que ser igual a 0 o mayor para que el valor buscado sea existente 

//includes nos retorna false o true si existe el valor
console.log(tweet.includes('hola'))
console.log(tweet.includes('primer'))
