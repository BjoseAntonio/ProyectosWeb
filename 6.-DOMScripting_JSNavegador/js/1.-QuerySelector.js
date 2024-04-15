const heading = document.querySelector('.header__texto h2'); //Retorna 0 o 1 Elemento nadamas. Es decir, si quieres seleccionar multiples elementos 'a' dentro de un 'nav'de solo obtendras como resultado el primer elemento 'a'.  
heading.textContent = 'Hola  mundo';
heading.classList.add('NuevaClase');
console.log(heading)

