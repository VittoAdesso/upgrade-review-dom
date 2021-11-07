/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
elementos de las listas que elimine ese mismo elemento del html.
 */

//Opción 1 

const countries = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

// creo etiquedas de lista desordenas, le doy id, y le digo que es hija del dom

const lista = document.createElement('ul');
lista.id = "litaDeDiv"
document.body.appendChild(lista); // llamo el docuemnt, proque le añado esto a su base 


// practico un foreach para recorrer el array de objetos, y que cada vez que de ua vuelta me cree un div que tenga h4 e imagen 

countries.forEach(item => // ES RECORRIDO DE MANERA MÁS FACIL 
    {
        const contenedores = document.createElement('div');
        contenedores.div = "contenedor";
        lista.appendChild(contenedores);

        const titulo = document.createElement('h4');
        titulo.textContent = item.title; // para agregar texto uso textconten o inner 
        contenedores.appendChild(titulo); // sin el document, ya que lo estoy añadiendo a un elemnto creado

        const imagenes = document.createElement('img');
        imagenes.src = item.imgUrl; // para agregar imahgenes uso el src 
        // están a un lado, ya que los hice hijos del h4 , para ver como cambia un poco todo
        lista.appendChild(imagenes); // sin el document, ya que lo estoy añadiendo a un elemnto creado 

        const buttonEliminador = document.createElement('button');
        buttonEliminador.id = "elimina";
        buttonEliminador.textContent = "Delete";
        contenedores.appendChild(buttonEliminador);
        buttonEliminador.addEventListener('click', removeElement);

    });

function removeElement() {
    // lista.parentElement.remove(); // me elimina todo de un sólo golpe 
    contenedores.parentElement.remove() // me da error, no está definido contenderores... es normal q no... 
}














/// Opción 2


// countries.forEach(item => // ES RECORRIDO DE MANERA MÁS FACIL 
//     {
//         const contenedores = document.createElement('div');
//         contenedores.div = "contenedor";
//         lista.appendChild(contenedores);

//         const titulo = document.createElement('h4');
//         titulo.textContent = item.title; // para agregar texto uso textconten o inner 
//         contenedores.appendChild(titulo); // sin el document, ya que lo estoy añadiendo a un elemnto creado

//         const imagenes = document.createElement('img');
//         imagenes.src = item.imgUrl; // para agregar imahgenes uso el src 
//         // están a un lado, ya que los hice hijos del h4 , para ver como cambia un poco todo
//         lista.appendChild(imagenes); // sin el document, ya que lo estoy añadiendo a un elemnto creado 

//         const buttonEliminador = document.createElement('button');
//         buttonEliminador.id = "elimina";
//         buttonEliminador.textContent = "Delete";
//         contenedores.appendChild(buttonEliminador);


//         function eliminarDiv() {
//             buttonEliminador.addEventListener('click', elemento => {
//                 elemento.parentElement.remove();
//                 //contenedores.parentElement.remove();
//                 // contenedores.parentElement.remove('div', [item]);
//                 //eliminarDiv.parentElement.remove();
//             });

//         }
//         eliminarDiv();


//     }

// );


/// opción 3 
// countries.forEach(item => // ES RECORRIDO DE MANERA MÁS FACIL 
//         {
//             const contenedores = document.createElement('div');
//             contenedores.div = "contenedor";
//             lista.appendChild(contenedores);

//             const titulo = document.createElement('h4');
//             titulo.textContent = item.title; // para agregar texto uso textconten o inner 
//             contenedores.appendChild(titulo); // sin el document, ya que lo estoy añadiendo a un elemnto creado

//             const imagenes = document.createElement('img');
//             imagenes.src = item.imgUrl; // para agregar imahgenes uso el src 
//             // están a un lado, ya que los hice hijos del h4 , para ver como cambia un poco todo
//             lista.appendChild(imagenes); // sin el document, ya que lo estoy añadiendo a un elemnto creado 

//             const buttonEliminador = document.createElement('button');
//             buttonEliminador.id = "elimina";
//             buttonEliminador.textContent = "Delete";
//             contenedores.appendChild(buttonEliminador);


//             function eliminarDiv() {
//                 buttonEliminador.addEventListener('click', () => {

//                         countries.splice('', 1); // digo que me quite una tarea, del indice y un sólo dato (I, 1)
//                         console.log(countries)


//                         // for (let i = 0; i < countries.length; i++) {
//                         //if (countries[i] === countries[i]) {
//                         //countries.splice(i, 1); // digo que me quite una tarea, del indice y un sólo dato (I, 1)

//                         //}
//                         // console.log(countries)
//                         //}
//                         //}); */

//                     }
//                     eliminarDiv();


//                 }

//             );
//         }



/// Opción 4 

//         const btnRemove = document.createElement('button');
//         btnRemove.innerText = 'Eliminar';
//         btnRemove.addEventListener('click', removeElement);