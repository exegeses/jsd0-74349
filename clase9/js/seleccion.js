// Ubicamos elementos dentro del DOM
/*### Elementos con ID ##*/
const primero = document.querySelector('#primero');
const segundo = document.getElementById('segundo');

// El botón que está dentro del article con ID "primero"
const btnPrimero = document.querySelector('#primero button');
btnPrimero.addEventListener(
        'click',
        () => {
                // Agregar la clase destacado a article con ID "primero"
                primero.classList.toggle('destacado');
              }
);

// El botón que está dentro del article con ID "segundo"
const btnSegundo = document.querySelector('#segundo button');
btnSegundo.addEventListener(
        'click',
        () => {
                segundo.classList.toggle('destacado');
              }
);

/*### Elementos con class ##*/
const itemsLista = document.querySelectorAll('.lista');
const itemsLista2 = document.getElementsByClassName('lista');
console.log(itemsLista);
console.log(itemsLista2);
itemsLista[2].classList.add('lista2');
