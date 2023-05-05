const express = require("express");
const router = express.Router();
const Movie=require("../models/Movie.model")
/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

//* GET ruta de /movies
router.get("/movies", (req, res, next) => {
  Movie.find()
    .select({ title: 1, image: 1 })
    .then((response) => {
      console.log(response);
      res.render("movies",{allMovies:response});
    })
    .catch((error) => {
      next(error);
    });
 
});


//* GET ruta de detalles de movies /movie/:id
router.get("/movie/:id",(req,res,next)=>{
    Movie.findById(req.params.id)
    .then((oneMovie)=>{
        console.log(oneMovie)
        res.render("movie-details",{oneMovie})
    })
    .catch((error)=>{
        next(error)

    })
})
module.exports = router;
