



const validates = () => {
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

    const valorTitle = title.value;
    const valorYear = year.value;
    const valorDirector = director.value;
    const valorDuration = duration.value;
    const valorRate = rate.value;
    const valorPoster = poster.value;

    const checkboxSelected = adventure.checked || fantasy.checked || comedy.checked || sci.checked;


    if (!valorTitle || !valorYear || !valorDirector || !valorDuration || !valorRate || !valorPoster) {
        alert("Rellenar")
         return false
    } else if (!checkboxSelected) {
        alert("Por favor, selecciona al menos una categoría.");
        return false;
    } else {
        return true
    }
} 


const submit = document.getElementById("submit")

submit.addEventListener("click", (event) => {
        event.preventDefault()
       if(validates()) {
        alert("Pelicula creada!")
       }

})




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

empty.addEventListener("click", (event) => {
      event.preventDefault();
      borrar()
})
