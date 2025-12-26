import mongoose from 'mongoose'

const movieSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:tru},
    genre:{type:String,required:true},
    releaseYear:{type:Number,required:true},
    moviePoster:{type:String,required:true}
});

export const Movie=mongoose.model("Movie",movieSchema)