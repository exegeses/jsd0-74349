const lista = document.querySelector('#lista');

const marcas = [
                'Hermés',
                'Zara',
                'Boss',
                'Aeropostale',
                'Kingpin',
                'Tomy',
                'Gola',
                'Hollister',
                'Abercrombie'
               ];
let n = 0;
while( n < marcas.length ){
    lista.innerHTML += `<li>${marcas[n]}</li>`;
    n++;
}               
