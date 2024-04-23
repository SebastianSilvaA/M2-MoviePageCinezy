const contenedorCard = document.querySelector('.cartas')

const renderizado = (pelicula) => {
    const carta = document.querySelector(".carta")

    const desc = document.querySelector(".carta-desc")

    desc.innerHTML = ` <p> ano: ${pelicula.year} <br>  director: ${pelicula.director} ${pelicula.title}
    año: ${pelicula.year}
   directo: ${pelicula.director}
   duracion: ${pelicula.duration} 
   calificacion: ${pelicula.rate}
`

    
    carta.innerHTML = `
    <img src = '${pelicula.poster}'> <p>`
    

    contenedorCard.appendChild(carta)
    
    carta.appendChild(desc)
    
   

    

}


module.exports = renderizado
