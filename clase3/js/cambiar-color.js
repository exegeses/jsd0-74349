// Ubicamos elementos dentro del DOM
const caja = document.querySelector('#caja');

// declaramos funciones de control
function cajaAzul()
{
    caja.style.backgroundColor = 'hsl(220, 70%, 50%)';
    caja.style.rotate = '-15deg';
    caja.innerText = 'azul';
}
function cajaBeige()
{
    caja.style.backgroundColor = 'hsl(50, 40%, 75%)';
    caja.style.rotate = '15deg';
    caja.innerText = 'beige';
}
function cajaRoja()
{
    caja.style.backgroundColor = 'hsl(0, 60%, 50%)';
    caja.style.rotate = '25deg';
    caja.innerText = 'rojo';
}

/*
// Pintar la caja de color azul
caja.style.backgroundColor = 'hsl(220, 70%, 50%)';
// Rotar la caja -15°
caja.style.rotate = '-15deg';
// Escribir un texto que diga azul
caja.innerText = 'azul';
*/
