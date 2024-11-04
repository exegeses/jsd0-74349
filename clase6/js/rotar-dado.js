const caja = document.querySelector('#caja');
const boton = document.querySelector('#boton');

/*
    Obtener un número aleatorio entre uno y seis
    Mostrar una imagen (  dentro de caja  ) según el número obtenido
    Reproducir el audio
*/
function generarNumero( numeroMinimo, numeroMaximo )
{
    // Random genera un número aleatorio entre 0~1
    let numeroAleatorio = Math.random();
    let numeroMultiplicado = numeroAleatorio * ( numeroMaximo - numeroMinimo ) + numeroMinimo;
    let numero = Math.round( numeroMultiplicado )
    return numero;
}

function playAudio()
{
    const audio = new Audio('audio/dice.mp3');
    audio.play();
}

boton.addEventListener(
        'click',
        () => 
            {
                let numero = generarNumero( 1, 6 );
                caja.innerHTML = `<img src="red/dice-${numero}.png">`;
                //caja.innerHTML = '<img src="red/dice-'+ numero +'.png">';
                playAudio();
            }
);