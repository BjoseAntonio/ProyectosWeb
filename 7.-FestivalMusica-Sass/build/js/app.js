document.addEventListener('DOMContentLoaded', function(){
    crearGaleria()
})

function crearGaleria(){
    const CANTIDAD_IMAGENES = 16
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1; i<= CANTIDAD_IMAGENES; i++){
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'Imagen Galería'

        //Event Handler 
        //Proceso de detectar y responder a la interaccion de un usuario

        imagen.onclick = function(){
            // console.log('Diste Click', i)

            mostrarImagen(i);
        }

        galeria.append(imagen)

        // console.log(imagen)
    }
}

function mostrarImagen(i){
    const imagen = document.createElement('IMG')
    imagen.src = `src/img/gallery/full/${i}.jpg`
    imagen.alt = 'Imagen Galería'
    imagen.classList.add('modal-img')

    //Generar modal 
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal

    //Crear botón cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-modal')
    cerrarModal.onclick = cerrarModal

    //Agregar y mostrar IMG y BTN
    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBtn)

    //Agregar al HTML
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)

    console.log(modal)
}

function cerrarModal(){
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')

    setTimeout(() =>{
        modal?.remove() //? sirve como la simplificacíon de un 'if', sí existe un modal que se remueva y si no, no existe ninguna accion.

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    },500)
}