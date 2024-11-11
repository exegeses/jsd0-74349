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
lista.innerHTML = '';

//for( inicio; condicion; incremento )
for( let n = 0; n < marcas.length; n++ ){
    lista.innerHTML += `<li>${marcas[n]}</li>`;
    //console.log( marcas[n] );
    console.log( lista.innerHTML );
}