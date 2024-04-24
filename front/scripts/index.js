const axios = require("axios")

const obtener = require("./handler")




obtener()


const validates = async () => {
    const title = document.getElementById("title-input").value;
    const year = document.getElementById("year-input").value;
    const director = document.getElementById("director-input").value;
    const duration = document.getElementById("duration-input").value;
    const rate = document.getElementById("rate-input").value;
    const poster = document.getElementById("poster-input").value;

    const adventure = document.getElementById("adventure").checked;
    const fantasy = document.getElementById("fantasy").checked;
    const comedy = document.getElementById("comedy").checked;
    const sci = document.getElementById("sci-fi").checked;

    const genre = [];
    if (adventure) genre.push('Adventure');
    if (fantasy) genre.push('Fantasy');
    if (comedy) genre.push('Comedy');
    if (sci) genre.push('Sci-Fi');

    if (!title || !year || !director || !duration || !rate || !poster) {
        alert("Por favor, rellena todos los campos");
        return false;
    } 
    
    if (genre.length === 0) {
        alert("Por favor, selecciona al menos una categoría.");
        return false;
    }

    try {
        const response = await axios.post('http://localhost:3000/movies/', {
            title,
            year,
            director,
            duration,
            genre,
            rate,
            poster
        });

        if (response.status === 201) {
            alert("¡Película creada!");
            return true;
        } else {
            alert("Hubo un error al crear la película.");
            return false;
        }
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
        alert("Hubo un error al intentar crear la película.");
        return false;
    }
};


const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", async (event) => {
    event.preventDefault(); 

    if (await validates()) {
        console.log("Pelicula creada!");
    }
});




const borrar = () => {
    const title = document.getElementById("title-input")
    const year = document.getElementById("year-input")
    const director = document.getElementById("director-input")
    const duration = document.getElementById("duration-input")
    const rate = document.getElementById("rate-input")
    const poster = document.getElementById("poster-input")
    const adventure = document.getElementById("adventure")
    const fantasy = document.getElementById("fantasy")
    const comedy = document.getElementById("comedy")
    const sci = document.getElementById("sci-fi")



    title.value = "";
    year.value = "";
    director.value = "";
    duration.value = "";
    rate.value = "";
    poster.value = "";
    adventure.checked = false;
    fantasy.checked = false;
    comedy.checked = false;
    sci.checked = false;
} 

const empty = document.getElementById("empty")

empty?.addEventListener("click", (event) => {
      event.preventDefault();
      borrar()
})

