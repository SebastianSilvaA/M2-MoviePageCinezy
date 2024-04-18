const axios = require('axios')

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
           const response = await axios.get("https://students-api.up.railway.app/movies");
           return response.data.map(movie => new Movie(movie))
           
        } catch (error) {
            console.log(error.message)
        }
     }
}