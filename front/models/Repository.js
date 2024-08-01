const {Movie} = require("../models/Movie");

class Repository{ 
    constructor(){
        this.listmovie = [];
    }
    createMovie({ title, year, director, duration, genre, rate, poster }){
        const id = this.listmovie.length + 1;
        const newMovie = new Movie(id, title, year, director, duration, genre, rate, poster);
        this.listmovie.push(newMovie);
        return this.listmovie;
    }
    getAllList(){
        return this.listmovie;
    }
}

module.exports = {Repository};