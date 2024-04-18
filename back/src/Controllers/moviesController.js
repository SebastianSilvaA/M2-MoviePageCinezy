const {obtener} = require('../Service/moviesService')

const moviesController = async (req, res) => {
    const obtenerpeli = await obtener()
    try {
        res.status(200).json(obtenerpeli)
        
        
    } catch (error) {
        
        res.status(500).json({error: error.message})
    }
}

module.exports = moviesController