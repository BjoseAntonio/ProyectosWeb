//Promises es una promesa que refleja un valor que estara disponible ahora, en un futuro o nunca
const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = false;

    if(auth){
        resolve('Usuario Autenticado'); //El promise se cumple en esta funcion 
    }else{
        reject('No se puede iniciar sesión');
    }
});

// console.log(usuarioAutenticado);

//En los promises existen 3 valores 
//Pending: No se ha cumplido pero tampoco se ha rechazado 
//Fulfielled: ya se cumplio 
//Rejected: Se ha rechazado o no se pudo cumplir

// Para acceder a los valores del promises
usuarioAutenticado
    // .then( function(resultado){
    //     console.log(resultado);
    // })
    // .catch(function(error){
    //     console.log(error);
    // })

    //utilizando arrow fuctions 
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))



