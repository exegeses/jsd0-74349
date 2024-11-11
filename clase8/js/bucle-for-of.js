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

//for( let varAuxiliar   of  miArray  )
for( let unaMarca  of marcas  ){
    lista.innerHTML += `<li>${unaMarca}</li>`;
    console.log(unaMarca);
}