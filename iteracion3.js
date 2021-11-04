/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el data-function="printHere". */

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];


const patron = document.querySelector('div'); 
const listaUl = document.createElement('ul'); 
listaUl.setAttribute('id', 'listaPrueba');  
for ( i=0; i<= cars.length - 1; i++){ // coloco menos 1 , para que no me salga undefined

const listaDeCarros = document.createElement('li'); 
listaDeCarros.innerHTML = cars[i];  
listaUl.appendChild(listaDeCarros); 

}

patron.appendChild(listaUl); 