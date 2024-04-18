const axios = require("axios")
const renderizado = require("./renderizar");





 const obtener = async () => {
    try {
       const response = await axios.get("http://localhost:3000/movies/");
       const data = response.data
       data.map(renderizado)
    } catch (error) {
        console.log(error.message)
    }
 }


module.exports = obtener