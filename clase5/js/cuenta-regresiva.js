// Ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');
const h1 = document.querySelector('h1');

let intervalo = '';

// Declaramos funciones de control
function control()
{
    const ahora = new Date();
    //const final = new Date(2024, 11, 25);
    const final = new Date(2024, 9, 31, 10);

    // Diferencia entre momentos de fecha
    let diferencia = final - ahora;
    console.log('diferencia:', diferencia);

    // Obtenemos la diferencia expresada en segundos
        //let segundos = parseInt(diferencia/1000);
    let segundos = Math.trunc(diferencia/1000)
    console.log('segundos:', segundos);

    // Obtenemos la diferencia expresada en minutos
    let minutos = Math.trunc(segundos/60);
    console.log('minutos:', minutos);

    // Obtenemos la diferencia expresada en horas
    let horas = Math.trunc(minutos/60);
    console.log('horas:', horas);

    // Obtenemos la diferencia expresada en días
    let dias = Math.trunc(horas/24);
    console.log('días:', dias);

    /**
     * Calculamos el resto de horas, minutos, segundos
     */
    horas = horas%24;
    minutos = minutos%60;
    segundos = segundos%60;

/*
#####
##### Cuándo los números lleguen a negativo 
        detener la cuenta regresiva
        setear  todos los números en cero 
        cambiar el texto de h1
#####
 */

    if(
        segundos <= 0  &&
        minutos  <= 0  &&
        horas    <= 0  &&
        dias     <= 0
      ){
            clearInterval( intervalo );
            segundos = 0;
            minutos  = 0;
            horas    = 0;
            dias     = 0;
            h1.innerText = '¡Oferta finalizada!';
      }


    /*
        Agregamos ceros iniciales
     */
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
    if( horas < 10 ){
        horas = '0'+ horas;
    }
    if( dias < 10 ){
        dias = '0'+ dias;
    }


    // imprimimos los datos obtenidos en cada uno de los span
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;

}
// Invocamos nuestra función
control();
// actualizamos el llamado a nuestra función
intervalo = setInterval( control, 1000 );