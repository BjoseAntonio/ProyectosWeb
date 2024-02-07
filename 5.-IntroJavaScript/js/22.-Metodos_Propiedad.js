//Método de propiedades 

const repoductor = {
    reproducir : function(id){
        console.log(`Reproduciendo Canción con el ID: ${id}`);
    },
    Pausar : function(){
        console.log(`Pausando...`)
    },
    creaPlayList : function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlayList : function(nombre){
        console.log(`Reproduciendo la playlist: ${nombre}`)
    }
}

//Añadiendo un nuevo objeto
repoductor.borrarCancion = function(id){
    console.log(`Elimando la Canción: ${id}`);
}


repoductor.reproducir(56);
repoductor.Pausar();
repoductor.borrarCancion(34);
repoductor.creaPlayList('Sad Boys');
repoductor.reproducirPlayList('Sad Boys');
