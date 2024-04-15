const elementos_Enlaces = document.querySelectorAll('a');

// console.log(elementos_Enlaces);
console.log(elementos_Enlaces[1]);
// console.log(elementos_Enlaces[2]);
elementos_Enlaces[2].textContent = 'Google';
elementos_Enlaces[2].href = 'http://www.google.com';
elementos_Enlaces[1].classList.add('NuevoClase')
elementos_Enlaces[1].classList.remove('nav_enlace');
