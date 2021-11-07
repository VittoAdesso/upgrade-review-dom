/* 
1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la lista. */


// están a un lado, ya que los hice hijos del h4 , para ver como cambia un poco tdo
const countries = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
    /*   { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=6' } */
];


// creo etiquedas de lista desordenas, le doy id, y le digo que es hija del dom

const lista = document.createElement('ul');
lista.id = "litaDeDiv"
document.body.appendChild(lista); // llamo erl docuemnt, proque le añado esto a su base 


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
        titulo.appendChild(imagenes); // sin el document, ya que lo estoy añadiendo a un elemnto creado 
    }
);


// creo un boton dentro del body, con su id, su texto y le digo que será hijo de l BODY, para que no pertenezca al array de objetos, y siemopre que quiera modificar ese array no me afecte al boton 

// así puedo crear un boton desde mi js ... 
const buttonEliminador = document.createElement('button');
buttonEliminador.id = "elimina";
buttonEliminador.textContent = "Delete the lastOne";
document.body.appendChild(buttonEliminador);

// hago una funicón, porque quiero que se repita cada vez que le de al boton, es para no repetir el codigo muchas veces !!! 
function funcionalidadDelBoton() {

    // agrego una escucha al botomn 
    buttonEliminador.addEventListener('click', () => {
        // digo que me quite el ultimo elemento del array de obejtos 
        countries.pop();

        // ahora declaro nueva constante que me llevará nuevos datoos del array reducido
        const nuevasCountriesDespuesDelPop = countries;

        //quiero que me reescibra el document. y me lo deje vacío, como en la calculadora. recuerda 
        lista.textContent = "";

        // para que me muestre de nuevo el listado, pido que se recorra el array de objetos, y le voy creando de nuevo sus h4 con img... 
        nuevasCountriesDespuesDelPop.forEach(item => // ES RECORRIDO DE MANERA MÁS FACIL 

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
                titulo.appendChild(imagenes); // sin el document, ya que lo estoy añadiendo a un elemnto creado 
            }
        );


    })
};

// sino la llamo, no me hará nada !!!! 
funcionalidadDelBoton();