//  puntajes
// const puntajes = 100;

// if(puntajes === 1000){
//     console.log('Si el puntaje es 1000')
// }else{
//     console.log('No es igual a 1000')
// }

// const efectivo = 1000;
// const carrito = 800;

// if(efectivo > carrito){
//     console.log('El usuario puede pagar');
// }else{
//     console.log('Fondos insuficiente');
// }

const rol = 'Editor';

if(rol === 'Administrador'){
    console.log('Acceso a todo el sistema');
}else if(rol === 'Visitante'){
    console.log("Acceso, a solo lectura");
}else{
    console.log('No tiene acceso')
}