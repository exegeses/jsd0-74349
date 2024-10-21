/*
    - Pedimos al usuario que ingrese su nombre
    - Una vez que el usuario ingresa su nombre, 
        almacenamos ese dato en memoria
    - Escribimos el nombre de usuario en el spam #frase
*/
let nombreUsuario = prompt('ingrese su nombre');

//document.write( nombreUsuario );
frase.innerText = nombreUsuario;

/*
    Insertamos código HTML dentro de un contenedor
*/
caja.innerHTML = '<img src="imgs/jslogo.png">';