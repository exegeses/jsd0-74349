const listaCapitales = document.querySelector('#listaCapitales');

const capitales = {
        'Argentina': 'Buenos Aires',
        'Brasil': 'Brasilia',
        'Chile': 'Santiago',
        'Colombia': 'Bogotá',
        'México': 'Ciudad de México',
        'Perú': 'Lima',
        'Venezuela': 'Caracas',
        'Ecuador': 'Quito',
        'Bolivia': 'La Paz',
        'Uruguay': 'Montevideo',
        'Paraguay': 'Asunción'
  };

for(  let pais  in  capitales  ){
    listaCapitales.innerHTML += `
                                <div>
                                    <span>${pais}</span> 
                                    <span>${capitales[pais]}</span> 
                                </div>
                                ` 
}