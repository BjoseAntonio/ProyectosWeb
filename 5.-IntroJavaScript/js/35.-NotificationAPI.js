const boton = document.querySelector('#boton');

boton.addEventListener('click',function(){
    // console.log('Diste click');
    Notification.requestPermission();
});