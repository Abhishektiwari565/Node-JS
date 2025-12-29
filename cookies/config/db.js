import mongoose from 'mongoose'

export const connectDB=()=>{
    mongoose.connect("mongodb://localhost:27017/authentication")
    .then(()=>{
        console.log("mongodb Connected")
    }).catch((err)=>{
        console.log("mongodb not connected",err)
    })
}