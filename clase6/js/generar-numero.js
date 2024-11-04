/**
 * Al pulsar el botón vamos a generar un número
 * Este número debe ser un entero entre 0 y 10
 * Finalmente mostrar el número en el span
 */
const frase = document.querySelector('#frase');
const btn = document.querySelector('#btn');

/*function generarNumero()
{
    // Random genera un número aleatorio entre 0~1
    let numeroAleatorio = Math.random();
    let numeroMultiplicado = numeroAleatorio * 10;
    let numero = Math.round( numeroMultiplicado )
    return numero;
}
console.log( generarNumero() );
*/

function generarNumero( numeroMinimo, numeroMaximo )
{
    // Random genera un número aleatorio entre 0~1
    let numeroAleatorio = Math.random();
    let numeroMultiplicado = numeroAleatorio * ( numeroMaximo - numeroMinimo ) + numeroMinimo;
    let numero = Math.round( numeroMultiplicado )
    return numero;
}

btn.addEventListener(
        'click',
        ()=>
            {
                frase.innerText = generarNumero( 10, 20 );
            }
);

/*
function getRandomArbitrary(min, max) 
    { 
        return Math.random() * (max - min) + min; 
    }
*/