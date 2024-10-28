/*
    Crear un reloj digital 
    formato: hh:mm:ss       i.e.:   09:30:42
*/
const frase = document.querySelector('#frase');

function mostrarReloj()
{
    // Creamos un objeto de fecha
    const fecha = new Date();

    // obtenemos el número correspondiente a las horas
    let horas = fecha.getHours();
    if ( horas < 10 ){
        horas = '0' + horas;
    }
    console.log('horas:', horas);

    // obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes();
    if ( minutos < 10 ){
        minutos = '0' + minutos;
    }

    console.log('minutos:', minutos);

    // obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds();
    if ( segundos < 10 ){
        segundos = '0' + segundos;
    }

    console.log('segundos:', segundos);
    
    // escribimos en el span
    // frase.innerText = horas +":" + minutos + ":" + segundos;
    frase.innerText = `${horas}:${minutos}:${segundos}`;
}

//invocamos la función mostrarReloj()
mostrarReloj();

// Actualizamos el llamado a la función mostrarReloj()
setInterval( mostrarReloj, 1000 );