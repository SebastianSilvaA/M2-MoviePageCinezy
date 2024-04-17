const axios = require("axios")
const renderizado = require("./renderizar");





 const obtener = async () => {
    try {
       const response = await axios.get("https://students-api.up.railway.app/movies");
       response.map(renderizado)
    } catch (error) {
        console.log(error.message)
    }
 }


module.exports = obtener