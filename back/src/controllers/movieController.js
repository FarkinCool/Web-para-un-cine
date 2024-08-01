const movieService = require("../services/movieService");

const getMovie = async (req, res) => {
    try {
        const movies = await movieService.getMovies();
        res.status(200).send(movies);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const createMovie = async (req,res) =>{
    try {
        const {title, year, director, duration, genre, rate, poster} = req.body;
        console.log(typeof year);
        const newMovie = await movieService.createMovies({title, year, director, duration, genre, rate, poster});
        res.status(201).json({ message: "Pelicula creada exitosamente", movie: newMovie});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// const functionOrdenSuperior = fn => async(req, res, next) =>{
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(400).json({error: error.message})
        
//     }
// };


module.exports = {getMovie, createMovie};