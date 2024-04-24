const { Router } = require('express')
const {moviesController, destructuring } = require('../Controllers/moviesController')


const movies = Router()

movies.get('/', moviesController )
movies.post('/', destructuring)


module.exports = movies