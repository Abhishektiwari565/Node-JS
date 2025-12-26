import mongoose from 'mongoose'

export const connectDb=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/movieManagement")
        console.log("mongodb connected")
    }catch(err){
        console.log("mongoDb not connected",err)
    }
}