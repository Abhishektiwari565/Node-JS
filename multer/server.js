import express from 'express'
import mongoose from 'mongoose'
import multer from 'multer'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const uploadPath=path.join(__dirname,"uploads")

const app=express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/school')
.then(()=>{
    console.log("mongodb connected !")
}).catch((err)=>{
    console.log(err)
})

const studentSchema=new mongoose.Schema({
    name:String,
    age:Number,
    course:String,
    img_path:String
},{timestamps:true})

const Student=mongoose.model("students",studentSchema)

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,uploadPath)
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now()+path.extname(file.originalname));
    }
})

const upload=multer({storage:storage});

app.post("/",upload.single("image"),async(req,res)=>{
    try{
       const student= new Student({
            name:"Aman gupta",
            age:22,
            course:"MERN",
            img_path:req.file.filename
        })
      const result= await student.save();
      res.json({message:"student added",data:result})
    }catch(err){
        res.json({message:"error",error:err})
    }
})

app.listen(3000,()=>{
    console.log("server started")
})