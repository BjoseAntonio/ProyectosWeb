//Refactorización del código
//variables
const datos = {
    nombre:'',
    email:'',
    mensaje:''
}
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

//Eventos
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    // validar formulario
    // Object destructuring
    const {nombre, email, mensaje} = datos;
    // console.log(nombre);
    // console.log(email);
    // console.log(mensaje);

    //validar mediante condición if 
    if( nombre ==='' || email === '' || mensaje === ''){
        // console.log('Todo los campos son obligatorios');
        mostrarAlerta('-Todo los campos son obligatorios-', 'error');

        return; //Corta la ejecución del código, y no muestra las demas líneas de código 
    }



    //Enviar formulario 
    // console.log('Enviando mensaje');
    mostrarAlerta('-Enviado correctamente-');
})



//funciones
function leerTexto(e){
    datos[e.target.id] = e.target.value;

    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    
    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('validacion');
    }

    formulario.appendChild(alerta);

    //Desaparezca después de 5 seg
    setTimeout(() =>{
        error.remove();
    }, 5000);
}

