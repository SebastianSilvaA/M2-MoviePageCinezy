const {obtener, enviarBD}  = require('../Service/moviesService')



const moviesController = async (req, res) => {
    const obtenerpeli = await obtener()
    try {
        res.status(200).json(obtenerpeli)
        
        
    } catch (error) {
        
        res.status(500).json({error: error.message})
    }
}

const destructuring = async (req, res) => {
    try {
        const {title, year, director, duration, genre, rate, poster   } = req.body
        await enviarBD(title, year, director, duration, genre, rate, poster)
        res.status(201).json({"title":"peliula creada"})
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports = {moviesController, destructuring}