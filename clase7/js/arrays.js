const frase = document.querySelector('#frase');

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
console.log( marcas );               

frase.innerText = marcas[3];

const diasSemana = [
                    'Domingo', 'Lunes', 'Martes',
                    'Miércoles', 'Jueves', 'Viernes',
                    'Sábado'
                   ];

const fecha = new Date();
// obtenemos el número de día de la semana
let numDiaSemana = fecha.getDay();
console.log('número dia semana:', numDiaSemana);
/**
 * Para mostrar el día de la semana en español 
 * podemos utilizar la combinación de un array 
 * (que contenga los nombres de los días de la semana) 
 * 
 * con el número correspondiente que no se obtiene getDay()
 */
document.write('Hoy es: ', diasSemana[ numDiaSemana ])