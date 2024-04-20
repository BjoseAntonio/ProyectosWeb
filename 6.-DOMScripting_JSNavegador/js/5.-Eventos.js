console.log(1);

window.addEventListener('load', function(){//Load espera a que el JS y los archivos que dependen del HTML estén listo
    console.log(2);
});

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){//Espera solo que cargue el documento(HTML), sin importar la descarga de otros archivos como CSS o imagenes.
    console.log(4);
});

console.log(5);