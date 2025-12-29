import mongoose from 'mongoose'

const authenticationSchema= new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true}
})

const auth=mongoose.model("auth",authenticationSchema);
export default auth;