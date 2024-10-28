const frase = document.querySelector('#frase');

let numero = 0;

function incrementar()
{
    numero++;
    frase.innerText = numero;
}

incrementar();
setInterval( incrementar, 500 );