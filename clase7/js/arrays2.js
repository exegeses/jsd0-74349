/*
    Cuando creamos un array y no le asignamos posiciones 
    de manera automática se ordena comenzando en cero 
    e incrementando en uno
*/
const nombres = [ 'Rick', 'Morty', 'Summer' ];

// array no consecutivo {sintáxis de objeto}
const pilotos = {
                1 : 'Max Verstappen',
                11 : 'Segio Pérez',
                4 : 'Lando Norris',
                81 : 'Oscar Piastri',
                63 : 'George Russell',
                44 : 'Lewis Hammilton',
                16 : 'Charles Leclerc',
                55 : 'Carlos Sainz',
                43 : 'Franco Colapinto'
        };
console.log(pilotos);      
// Mostramos uno de los elementos (pilotos)  
console.log(pilotos[43]);

// array asociativo donde la llave es una cadena de caracteres {sintáxis de objeto}
const capitales = {
                    'Argentina':'Buenos Aires',
                    'Brasil':'Brasilia',
                    'Chile':'Santiago',
                    'Venezuela':'Caracas',
                    'Uruguay':'Montevideo',
                    'Paraguay':'Asunción',
                    'Perú': 'Lima'
        };
console.log(capitales);   
console.log(capitales['Argentina']);     