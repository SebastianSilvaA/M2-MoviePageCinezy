const contenedorCard = document.querySelector('.cartas')

const renderizarTarjeta = (pelicula) => {
    const carta = document.createElement('div');
    carta.classList.add('carta', 'col'); 

    const imagen = document.createElement('img');
    imagen.src = pelicula.poster;
    imagen.alt = pelicula.title;

    const desc = document.createElement('p');
    desc.classList.add('carta-desc');
    desc.innerHTML = `
        <strong>${pelicula.title}</strong><br><br>
        Año: ${pelicula.year}<br><br> 
        Director: ${pelicula.director}<br><br> 
        Duración: ${pelicula.duration}<br><br> 
        Calificación: ${pelicula.rate}<br><br>
        Genero: ${pelicula.genre}
       
    `;

   
    carta.appendChild(imagen);
    carta.appendChild(desc);
    contenedorCard.appendChild(carta);
};

module.exports = renderizarTarjeta;