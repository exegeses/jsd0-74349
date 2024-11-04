const frase = document.querySelector('#frase');

// función para sumar dos números
function sumar( num1, num2 )
{
    return num1 + num2;
}


frase.innerText = sumar( 4, 6 );