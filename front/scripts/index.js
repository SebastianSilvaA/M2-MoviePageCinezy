const contenedorCard = document.getElementById('cardContainer')

tempData.map((pelicula) => {
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')

    cardDiv.innerHTML = `<h3> ${pelicula.title} </h1>
     <p>año: ${pelicula.year} </p>
    <p>directo: ${pelicula.director} </p>
    <h1>duracion: ${pelicula.duration} </p>
    <p>calificacion: ${pelicula.rate} </p>
    <img src = '${pelicula.poster}'>
    <p>Genre: ${pelicula.genre}</p>`
    
    contenedorCard.appendChild(cardDiv)

    cardDiv.classList.add('gato')

})



