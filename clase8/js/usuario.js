const contenedor = document.querySelector('#contenedor');

const usuario = {
                    nombre: "Cosme Fulanito",
                    avatar: "profile-4.png",
                    ciudad: "Barcelona",
                    profesion: "Programador"
                };

contenedor.innerHTML = `<article class="card">
                            <img src="imgs/${usuario.avatar}" class="avatar">
                            <span class="name">${usuario.nombre}</span>
                            <span class="city">Cuidad: ${usuario.ciudad}</span>
                            <span class="profesion">Profesión: ${usuario.profesion}</span>
                        </article>`;

console.table(usuario);                        