import mongoose from 'mongoose'
import express from 'express'

const app=express();
app.use(express.json());

const connectDB=async()=>{
await mongoose.connect("mongodb://localhost:27017/company");
console.log("mongodb connected")
}
connectDB();

const companySchema=new mongoose.Schema({
    name:String,
    year:Number,
    owner:String,
    networth:Number
})

const Company=mongoose.model("company",companySchema)

const addCompany=async(data)=>{
    const company=new Company(data)
    const result=await company.save()
    console.log(result)
    return result;
}

const deleteCompany=async(id)=>{
    const result=await Company.deleteOne({
        _id:id
    })
    return result;
}

const updateCompany = (id, data) => {
  return Company.updateOne(
    { _id: id },
    { $set: data }
  );
};



app.get("/",async(req,res)=>{
    const data=await Company.find()
    res.json(data);
})

app.post("/",async(req,res)=>{
  const result=await addCompany(req.params.id)
  res.json({message:"company added",data:result})
})

app.delete("/:id",async(req,res)=>{
    const result=await deleteCompany(req.params.id)
    res.json({message:"company deleted",data:result})
})

app.put("/:id",async(req,res)=>{
    const result=await updateCompany(req.params.id,req.body)
    res.json({message:"company updated",data:result})
})

app.listen(5000,()=>{
    console.log("server started")
})