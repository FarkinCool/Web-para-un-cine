
const validateMovie = (req, res, next) => {
    const {title, year, director, duration, genre, rate, poster} = req.body;

    if(!title || !year || !director || !duration || !genre || !rate || !poster){
        return res.status(400).json({message: "TODOS los campos son OBLIGATORIOS!"});
    }

    if(year.toString().length !==4 ){
        return res.status(400).json({message: "el anio debe ser un numero de 4 DIGITOS"});
    }
    next();
}

module.exports = validateMovie;