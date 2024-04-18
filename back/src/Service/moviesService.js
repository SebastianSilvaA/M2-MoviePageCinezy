const axios = require('axios')

const objetoFunciones = {
    obtener: async () => {
        try {
           const response = await axios.get("https://students-api.up.railway.app/movies");
           return response.data
           
        } catch (error) {
            console.log(error.message)
        }
     }
}

module.exports = objetoFunciones