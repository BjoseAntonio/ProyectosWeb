//Creando dos solicitudes 
function descargarNuevosProductos(){
    return new Promise((resolve, reject) =>{
        console.log('Descargando productos...');


        setTimeout(()=>{
            resolve ('Los productos se han descargado correctamente');
        },5000);
    });
}

function descargandoNuevosClientes(){
    return new Promise( (resolve, reject) =>{
        console.log('Descargando clientes...');

        setTimeout(()=>{
            resolve ('Los clientes fueron descargados');
        },3000);
    });
}

// async function app(){
//     const resultado = await descargandoNuevosClientes();
//     console.log(resultado);
// }

async function app(){
    try{
        const resultado = await Promise.all([descargandoNuevosClientes(), descargarNuevosProductos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    }catch(error){
        console.log(error);
    }
}

app();