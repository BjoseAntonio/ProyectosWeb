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
        mostrarError('Todo los campos son obligatorios');

        return; //Corta la ejecución del código, y no muestra las demas líneas de código 
    }



    //Enviar formulario 
    // console.log('Enviando mensaje');
    mostrarValidadcion('Enviado correctamente');
})



//funciones
function leerTexto(e){
    datos[e.target.id] = e.target.value;

    // console.log(datos);
}
//Muestra mensaje de error en pantalla
function mostrarError(mensaje){
    // console.log(mensaje);
    const error = document.createElement('P');

    error.textContent = mensaje;  //contenido de mensaje 
    error.classList.add('error');//Crear su clase 
    formulario.appendChild(error);//Añadir al documento HTML

    // console.log(error);

    //Desaparezca después de 5 seg
    setTimeout(() =>{
        error.remove();
    }, 5000);
}

//Muestra mensaje de validación en pantalla 
function mostrarValidadcion(mensaje){
     const validadcion  = document.createElement('P');

     validadcion.textContent = mensaje;
     validadcion.classList.add('validacion');
     formulario.appendChild(validadcion);

    //  console.log(validadcion);

    setTimeout(() =>{
        validadcion.remove();
    },5000);

}
