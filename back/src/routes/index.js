const {Router} = require("express");
const movieController = require("../controllers/movieController");
const validateMovie = require("../middleware/validateMovie");

const router = Router();

router.get("/movies", movieController.getMovie);
router.post("/movies", validateMovie, movieController.createMovie);

module.exports = router;