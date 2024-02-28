const metodoPago = 'Cheque';

// if(rol === 'Administrador'){
//     console.log('Acceso a todo el sistema');
// }else if(rol === 'Visitante'){
//     console.log("Acceso, a solo lectura");
// }else{
//     console.log('No tiene acceso')
// }

// Sustituye los if por switch cuando se tiene muchas opciones

switch(metodoPago){
    case 'Tarjeta':
        console.log(`Pago realizado con ${metodoPago}`);
        break;
    case 'Cheque':
        console.log(`Pago realizado con ${metodoPago}`);
        break;
    case 'Efectivo':
        console.log(`Pago realizado con ${metodoPago}`);
        break;
    default:
        console.log('Metodo de pago no reconocido');
        break;
}