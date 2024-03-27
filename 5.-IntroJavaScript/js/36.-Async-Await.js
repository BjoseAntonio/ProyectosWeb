function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log("Descargando clientes... Espere...")

        setTimeout(() => {
            console.log('La descarga se ha completado');
        }, 5000);
    });
}

async function app(){
    try{
        const resultado = await descargarNuevosClientes();
        console.log(resultado);
    }catch(error){
        console.log(error);
    }
}

app();