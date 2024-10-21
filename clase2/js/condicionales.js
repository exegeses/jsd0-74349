/*
    Hacer una pregunta al usuario
    - El usuario va a responder
    - Vamos a almacenar esa respuesta en memoria
*/
let respuesta = prompt('¿qué seleccionado ganó la copa del mundo Qatar 2022?');

// condicional
if( respuesta.toLowerCase() == 'argentina' ){
    // bloque de código a ejecutar si la condición es true
    frase.innerText = '¡Correcto!';
}
else{
    // bloque de código a ejecutar si la condición es false
    frase.innerText = '¡Incorrecto!';
}
