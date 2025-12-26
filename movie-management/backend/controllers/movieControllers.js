
import Movie from '../models/movieModels';


export const addMovie=async(req,res)=>{
    try{
      const result= await Movie.create(req.body);
        res.json({message:"Movie added successfully",data:result})
    }catch(err){
        res.json({message:"Error in adding Movie",error:err})
    }
}

export const getMovies=async(req,res)=>{
    try{
        const movies=await Movie.find()
        res.json(Movies);
    }catch(err){
        res.json({message:"Error in fetching movie",error:err})
    }
}
