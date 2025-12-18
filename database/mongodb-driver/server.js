import {MongoClient,ObjectId} from 'mongodb'
import express from 'express'

const app=express();
app.use(express.json());
const client = new MongoClient('mongodb://127.0.0.1:27017')

const connectDB =async()=>{
    await client.connect();
    console.log("mongodb connected...");
    const db=client.db("school")
    return db;
}

const addStudent=async(student)=>{
    const db= await connectDB();
    const result= await db.collection("primary").insertOne(student);
     return result;
}


const readStudent=async()=>{
    const db=await connectDB();
    const data=await db.collection("primary").find().toArray();
    // console.log(data);
    return data;
}

const updateStudent=async (id,student)=>{
    const db=await connectDB();
    const result=db.collection("primary").updateOne(
        {_id:new ObjectId(id)},
        {$set:student}
    )
}

const deleteStudent=async(id)=>{
    const db= await connectDB()
    const result=await db.collection("primary").deleteOne({
        _id:new ObjectId(id)
    })
}

app.get('/api',async(req,res)=>{
    const data=await readStudent()
    res.json(data)
});

app.post("/api",async (req,res)=>{
   const student=req.body;
   await addStudent(student);
  res.json({message:"student added successfully"})
})

app.put("/api/:id",async (req,res)=>{
    const id=req.params.id;
    const student=req.body;
    updateStudent(id,student);
    res.json({message:"student updated succcessfully"});
})

app.delete("/api/:id",(req,res)=>{
    const id=req.params.id;
    deleteStudent(id);
    res.json({message:"student deleted successfully"});
})

app.listen(4000,()=>{
    console.log("server started");
})


// addStudent();
// readStudent();