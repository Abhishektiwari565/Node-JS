
import Movie from '../models/movieModels.js';
import fs from 'fs'
import path from 'path'
import {__dirname} from '../server.js'

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
    const imgPath = path.join(__dirname, "uploads", movie.moviePoster)

    console.log("Deleting image at:", imgPath);
    // delete image from folder
    if(fs.existsSync(imgPath)){
        console.log("File exists:", fs.existsSync(imgPath));
        fs.unlinkSync(imgPath)
    }
    // to delete image from database
    await Movie.findByIdAndDelete(req.params.id);
    res.json({message:"movie deleted"});
    }catch(err){
        res.json({message:"movie not deleted"})
    }
}

export const updateMovies=async(req,res)=>{
    try{
        const movie=await Movie.findById(req.params.id);
        if(req.file && movie.moviePoster){
            const oldImgPath=path.join(__dirname,"uploads",movie.moviePoster) ;

            // dlt old image
            if(fs.existsSync(oldImgPath)){
                fs.unlinkSync(oldImgPath);
            }
            movie.moviePoster=req.file.filename
        }

        movie.title=req.body.title;
        movie.description=req.body.description;
        movie.genre=req.body.genre;
        movie.releaseYear=req.body.releaseYear;
        await movie.save();
        res.json({message:"movie updated",data:movie})
    }catch(err){
        res.json({message:"movie not updated",error:err})
    }
}
