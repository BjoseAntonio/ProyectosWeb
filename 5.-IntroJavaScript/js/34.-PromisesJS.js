//Promises es una promesa que refleja un valor que estara disponible ahora, en un futuro o nunca
const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;

    if(auth){
        resolve('Usuario Autenticado'); //El promise se cumple en esta funcion 
    }else{
        reject('No se puede iniciar sesión');
    }
});
