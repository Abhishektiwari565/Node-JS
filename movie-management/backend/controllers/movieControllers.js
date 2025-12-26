
import Movie from '../models/movieModels.js';
import fs from 'fs'
import path from 'path'
import {__dirname} from '../routes/movieRoutes.js'

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


export const deleteMovies=async(req,res)=>{
    try{
        const movie=await Movie.findById(req.params.id)
    const deleteimg=path.join(__dirname,movie.moviePoster)
    // delete image from folder
    if(fs.existsSync(deleteimg)){
        fs.unlinkSync(deleteimg)
    }
    // to delete image from database
    await Movie.findByIdAndDelete(req.params.id);
    res.json({message:"movie deleted"});
    }catch(err){
        res.json({message:"movie not deleted"})
    }
}

// export const updateMovies=()=>{
//     try{

//     }catch(err){

//     }
// }
