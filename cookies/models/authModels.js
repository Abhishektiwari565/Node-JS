import mongoose from 'mongoose'

const authenticationSchema= new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true}
})

const Auth=mongoose.model("Auth",authenticationSchema);
export default Auth;