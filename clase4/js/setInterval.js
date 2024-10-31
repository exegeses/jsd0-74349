const frase = document.querySelector('#frase');

let numero = 0;
let intervalo = '';

function incrementar()
{
    numero++;
    frase.innerText = numero;
    if( numero == 30 ){
        clearInterval( intervalo );
    }
}

incrementar();
intervalo = setInterval( incrementar, 500 );