const boton = document.querySelector('.boton');

boton.addEventListener('click', function(evento){
    console.log(evento.target);
    evento.preventDefault();//Prevenir en no recargar la pagina, util para formularios
    console.log('Enviando Formulario');
});
