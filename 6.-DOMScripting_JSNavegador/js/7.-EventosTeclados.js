//Evento de los input y textarea

//Objetos
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

// nombre.addEventListener('input', function(e){
//     console.log(e.target.value);
// });

// correo.addEventListener('input', function(e){
//     console.log(e.target.value);
// });

// mensaje.addEventListener('input', function(e){
//     console.log(e.target.value);
// });

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);


function leerTexto(e){
    // console.log('escribiendo...')
    console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    console.log(datos)
}