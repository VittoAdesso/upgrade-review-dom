/* 1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises. */

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const patron = document.getElementById('aqui'); //llamo de base un div que tenga 
const listaUl = document.createElement('ul'); // creo la lista ul
listaUl.setAttribute('id', 'listaPrueba');  // le digo que tedrá de id lo que va depsues de coma

for ( i=0; i<= countries.length; i++){ // inicio bucle para que recorra e imprima

const listaDePaises = document.createElement('li');  // creo listas para que me lo añada en cada bucle
listaDePaises.innerHTML = countries[i];  /// pido sustituir el contenido de acuerdo a la vuelta 
listaUl.appendChild(listaDePaises); // le digo que la lista ul tiene de hijo los paises 

}

patron.appendChild(listaUl); // le digo que tiene de hijo el div la lista general 