const mongoose=require("mongoose")

const movieSchema ={
    title: String,
    director: String,
    stars: [String],
    image :String,
    description:String,
    showtimes:[String],

}
const Pokemon = mongoose.model("Movie",movieSchema)
module.exports=Pokemon