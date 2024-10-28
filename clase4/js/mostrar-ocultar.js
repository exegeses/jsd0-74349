// Ubicamos elementos dentro del DOM
const caja = document.querySelector('#caja');

// Declaramos funciones de control
function ocultar()
{
    caja.style.display = 'none';
}
function mostrar()
{
    caja.style.display = 'block';
}
function mostarOcultar()
{
    if( caja.style.display == 'none' ){
        mostrar();
    }
    else{
        ocultar();
    }
}