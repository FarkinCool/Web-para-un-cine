const Movie = require("../models/Movie");

const getMovies = async() => {
    const movies = await Movie.find();
    return movies;
};

const createMovies = async(movie) => {
    try {
        const newMovies = await Movie.create(movie);
        return newMovies; 
    } catch (error) {
        throw new Error("error creating movie" + error.message);
    }
}

module.exports = {getMovies, createMovies};














// const tempData = [
//     {
//       title: "Guardians of the Galaxy Vol. 2",
//       year: 2017,
//       director: "James Gunn",
//       duration: "2h 16min",
//       genre: ["Action", "Adventure", "Comedy"],
//       rate: 7.7,
//       poster:
//         "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
//     },
//     {
//       title: "Star Wars: Episode IV - A New Hope",
//       year: 1977,
//       director: "George Lucas",
//       duration: "2h 1min",
//       genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
//       rate: 8.7,
//       poster:
//         "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
//     },
//     {
//       title: "The Lord of the Rings: The Fellowship of the Ring",
//       year: 2001,
//       director: "Peter Jackson",
//       duration: "2h 58min",
//       genre: ["Action", "Adventure", "Drama", "Fantasy"],
//       rate: 8.8,
//       poster:
//         "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//     },
//   ];

// class Movie {
//     constructor(title, year, director, duration, genre, rate, poster){
//         if(!title || !director || !poster){
//             throw new Error("las propiedades TITLE, POSTER y DIRECTOR son obligatorios");
//         }
//         this.title = title;
//         this.year = year || '90s';
//         this.director = director;
//         this.duration = duration || 'N/A';
//         this.genre = genre || [];
//         this.rate = rate || 0;
//         this.poster = poster;
//     }
// }

// const getMovies = async () => {
//     try {
//         const movies = await new Promise((resolve) => {
//         setTimeout(() => { 
//             resolve(tempData.map(moviesData => new Movie(
//             moviesData.title,
//             moviesData.year,
//             moviesData.director,
//             moviesData.duration,
//             moviesData.genre,
//             moviesData.rate,
//             moviesData.poster
//             )));
//         },500);
//     })
//         return movies;
//     } catch (error) {
//         throw new Error("error al obtener las peliculas: " + error.message);
//     }

// };

//module.exports = {getMovies , Movie};

