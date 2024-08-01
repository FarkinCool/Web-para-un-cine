const moongose = require("mongoose");
//const { defaultConfiguration } = require("../server");

const movieSchema = new moongose.Schema({
    title : { type: String, required: true },
    year : { type: Number, required: true },
    director : { type: String, required: true },
    duration : { type: String, required: true },
    genre : [{ type: String, required: true }], 
    rate : { type: Number, required: true },
    poster : { type: String, required: true },
    status: { type: String, default: "A" } // A:activo | I:inactivo
});

const Movie = moongose.model("Movie", movieSchema);
module.exports = Movie;