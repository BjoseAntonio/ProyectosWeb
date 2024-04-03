//FetchApi es el nuevo estándar.
//Igual que Ajax te permite enviar información al servidor u obtener información de un servidor. 


//Puedes obtener un archivo local o una respuesta de un servidor(Texto o JSON).


//Al igual que todas las API's modernas de JavaScript Utiliza Promises o también async / await.

const archivoEmpleados = 'empleados.json';

function obtenerEmpleados(){
    fetch(archivoEmpleados)
        .then(resultado =>{
            // console.log(resultado);
            //Status:200 == conexion exitosa 
            //Status:404 == sin conexion
            return resultado.json();
        })
        .then(datos => {
            console.log(datos);
        })
    // fetch('URL DE GOOGLE')
}

obtenerEmpleados();