const { Router } = require('express');
const movies = require('./moviesRouter');




const router = Router()

router.use('/movies', movies)


module.exports = router;