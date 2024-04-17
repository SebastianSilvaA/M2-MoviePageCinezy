const { Router } = require('express')
const moviesController = require('../Controllers/moviesController')


const movies = Router()

movies.get('/', moviesController )


module.exports = movies