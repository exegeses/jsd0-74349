/*
Un parámetro completa el sentido de una función
Además así que cada vez que invoquemos a una función 
ésta se comporte levemente diferente
*/
console.log('mensaje a imprimir en Consola');
//función saludar
function saludar( persona )
{
    console.log('Hola', persona);
}

saludar('Rick');
saludar('Morty');
saludar('Summer');
/*--------*/
const btnC = document.querySelector('#btnC');
const btnV = document.querySelector('#btnV');
const btnN = document.querySelector('#btnN');
const caja = document.querySelector('#caja');

function pintar( codigoColor, grados, texto )
{
    caja.style.backgroundColor = codigoColor;
    caja.style.rotate = grados;
    caja.innerText = texto;
}

btnC.addEventListener(
        'click',
        () =>
            {
                pintar('hsl(200, 80%, 60%)', '-20deg', 'celeste');
            }
);
btnV.addEventListener(
        'click',
        () =>
            {
                pintar('hsl(160, 80%, 50%)', '25deg', 'verde');
            }
);
btnN.addEventListener(
        'click',
        () =>
            {
                pintar('hsl(50, 60%, 50%)', '0deg', 'naranja');
            }
);