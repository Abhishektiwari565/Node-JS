import mongoose from 'mongoose'

const authenticationSchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phone:{type:String,required:true}
},{timestamps:true})

const Auth=mongoose.model("Auth",authenticationSchema);
export default Auth;