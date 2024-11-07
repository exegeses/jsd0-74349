// ubicamos elementos dentro del DOM
const rotador = document.querySelector('#rotador');
console.log(rotador);
const botones = document.querySelectorAll('#rotador img');
console.log(botones);
const anterior = botones[0];
const siguiente = botones[1];
const span = document.querySelector('#rotador span');


const marcas = [
                'Hermés',
                'Zara',
                'Boss',
                'Aeropostale',
                'Kingpin',
                'Tomy',
                'Gola',
                'Hollister',
                'Abercrombie',
                'JCrew'
               ];

// -> Estado inicial
let llave = 3;
// Mostramos una de las marcas dentro del span
span.innerText = marcas[llave];  

siguiente.addEventListener(
            'click',
            () =>
                {
                    llave++;
                    if( llave == marcas.length ){
                        llave = 0;
                    }
                    span.innerText = marcas[llave];  
                }
);
anterior.addEventListener(
        'click',
        () =>
            {
                llave--;
                if( llave == 0 ){
                    llave = marcas.length - 1;
                }
                span.innerText = marcas[llave];  
            }
);