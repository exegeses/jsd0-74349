/*
    Hacer una pregunta al usuario
    - El usuario va a responder
    - Vamos a almacenar esa respuesta en memoria
*/
let respuesta = prompt('¿qué seleccionado ganó la copa del mundo Qatar 2022?');

// condicional
let im = 'error';
if( respuesta.toLowerCase() == 'argentina' ){
    // bloque de código a ejecutar si la condición es true
    im = 'ok';
    //frase.innerText = '¡Correcto!';
}
//frase.innerHTML = '<img src="imgs/'+im+'.png">';
frase.innerHTML = `<img src="imgs/${im}.png">`;
/*else{
    // bloque de código a ejecutar si la condición es false
    //frase.innerText = '¡Incorrecto!';
}*/
