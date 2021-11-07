/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
h4 para el titulo y otro elemento img para la imagen. */


const countries = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];


const lista = document.createElement('ul');
lista.id = "litaDeDiv"
document.body.appendChild(lista); // llamo erl docuemnt, proque le añado esto a su base 




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
        contenedores.appendChild(imagenes); // sin el document, ya que lo estoy añadiendo a un elemnto creado
    }
)



/* window.document.onload(); */







/* 
1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la lista. */
/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
elementos de las listas que elimine ese mismo elemento del html.
 */