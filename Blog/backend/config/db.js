import mongoose from 'mongoose'

export const connectDB=async()=>{
   try{
     await mongoose.connect("mongodb://localhost:27017/Blog");
     console.log("mongodb connected");
   }catch(err){
    console.log("mongodb not connected",err);
   }
}