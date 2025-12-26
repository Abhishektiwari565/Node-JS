
// import Movie from '../models/movieModels.js';


// export const addMovie=async(req,res)=>{
//     try{
//       const result= await Movie.create(req.body);
//         res.json({message:"Movie added successfully",data:result})
//     }catch(err){
//         res.json({message:"Error in adding Movie",error:err})
//     }
// }

// export const getMovies=async(req,res)=>{
//     try{
//         const movies=await Movie.find()
//         res.json(movies);
//     }catch(err){
//         res.json({message:"Error in fetching movie",error:err})
//     }
// }
import Movie from '../models/movieModels.js';

export const addMovie = async (req, res) => {
    try {
        const result = await Movie.create({
            title:req.body.title,
            description:req.body.description,
            genre:req.body.genre,
            releaseYear:req.body.releaseYear,
            moviePoster:req.file.filename
        });
        res.json({ message: "Movie added successfully", data: result })
    } catch (err) {
        res.json({ message: "Error in adding Movie", error: err.message })
    }
}

export const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies);
    } catch (err) {
        res.json({ message: "Error in fetching movie", error: err.message })
    }
}
