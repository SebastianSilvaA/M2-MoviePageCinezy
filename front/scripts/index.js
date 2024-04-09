const contenedorCard = document.getElementById('cardContainer')

tempData.map((pelicula) => {
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')

    cardDiv.innerHTML = `<h3> ${pelicula.title} </h1>`

    contenedorCard.appendChild(cardDiv)

})

console.log(contenedorCard)

