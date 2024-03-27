const boton = document.querySelector('#boton');

boton.addEventListener('click',function(){
    Notification.requestPermission()
        .then(resultado =>{
            console.log(`El resultado es ${resultado}`);
            if(resultado === 'granted'){
                new Notification('Esta es una notificacion', {
                    icon: 'img/whats.png',
                    body:'Visita los nuevos cursos'
                });
            }
            
        });
});



// boton.addEventListener('click',function(){
//     // console.log('Diste click');
//     Notification.requestPermission()
//         .then(resultado => 
//             console.log(`El resultado es ${resultado}`)
//             if(Notification.permission == 'granted'){
//                 new Notification('Esta es una notificación', {
//                     icon: 'img/whats.png',
//                     body: 'Código con José, de los mejores'
//                 });
//             }
        
//         ));
// });

