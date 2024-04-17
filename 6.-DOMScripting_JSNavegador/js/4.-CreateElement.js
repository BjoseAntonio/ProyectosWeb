const nuevoElemento = document.createElement('A');

 //Agregar href
 nuevoElemento.href = '#';

 //Agregar clase
 nuevoElemento.classList.add('nav_enlace');

 //Agregar texto 
 nuevoElemento.textContent = 'Ubicación';

 //Agregar elemento al documento
 const barraNav = document.querySelector('.nav');

//  console.log(barraNav);

 barraNav.appendChild(nuevoElemento);


// console.log(nuevoElemento);