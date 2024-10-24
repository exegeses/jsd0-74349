/*
    Mostrar la fecha actual
    formato:    dd/mm/yyyy
*/
// Ubicar elementos dentro del DOM
const frase = document.querySelector('#frase');

// Creamos un objeto de fecha
const fecha = new Date(2024, 3, 2);
console.log(fecha);

// Obtenemos el número de día de mes
let diaMes = fecha.getDate();
if( diaMes < 10 ){
    diaMes = '0'+diaMes;
}
console.log('dia:', diaMes);

// Obtenemos el número de mes actual
let mes = fecha.getMonth() + 1;
if( mes < 10 ){
    mes = '0'+ mes;
}
console.log('mes:', mes);

// Obtenemos el número de año actual
let anio = fecha.getFullYear();
console.log('año:', anio);

// escribimos en el span
//frase.innerText = diaMes +'/'+ mes +'/'+ anio ;
frase.innerText = `${diaMes}/${mes}/${anio}`;