const axios = require('axios')
const { movieModel } = require("../Models/movies.js")

class Movie {
    constructor({title, year, director, duration, genre, rate, poster}) {
        if (!title || !poster || !director) throw Error('faltan datos')

        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
}

    


module.exports = {
    obtener: async () => {
        try {
           const response = await movieModel.find();
           return response.map(movie => new Movie(movie))
           
        } catch (error) {
            console.log(error.message)
            throw Error
        }
     }
}