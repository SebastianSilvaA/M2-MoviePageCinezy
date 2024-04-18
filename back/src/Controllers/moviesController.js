 const objetoFunciones = require("../Service/moviesService")

const moviesController = async (req, res) => {
    const obtener = await objetoFunciones.obtener()
    try {
        res.status(200).json(obtener)
        
        
    } catch (error) {
        
        res.status(500).json({error: error.message})
    }
}

module.exports = moviesController