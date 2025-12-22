import mongoose from 'mongoose'

const bookSchema=new mongoose.Schema({
    title:{ type: String, required:true},
    author:{type:String, required:true},
    price:{type:Number, required:true},
    category:{type:String},
    publishYear:{type:Number}
},
{timestamps:true}
)

export const BookModel= mongoose.model("Book", bookSchema);