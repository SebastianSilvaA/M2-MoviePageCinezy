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
        if (error.response.status === 400) {
            alert("Error de validación: Por favor, asegúrate de que los datos ingresados sean correctos.");
        } else {
            console.error("Error al realizar la solicitud:", error);
            alert("Hubo un error al intentar crear la película.");
        }
        return false;
    }
};

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", async (event) => {
    event.preventDefault(); 

    if (await validates()) {
        console.log("Película creada exitosamente.");
    } else {
        console.log("Hubo un error al crear la película.");
    }
});