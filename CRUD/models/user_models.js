


import mongoose from 'mongoose'


 const userSchema=new mongoose.Schema({
    email:{type:String,unique:true},
    password:String
});
export const userCollection=mongoose.model("user",userSchema);
























// import mongoose from 'mongoose'

//  const userSchema=new mongoose.Schema({
//     email:{type:String,unique:true},
//     password:String
// },{timestamps:true});
// export const userCollection= mongoose.model("user",userSchema);
