import {MongoClient} from 'mongodb'
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

const addStudent=async()=>{
    const db= await connectDB();
    const result= await db.collection("primary").insertOne({
        name:"John Doe",
        age:10,
        grade:"5th"
     });
     return result;
}

const updateStudent=async()=>{
    const db=await connectDB();
    const id=req.params.id
    const result=db.collection("primary").updateOne({

    })
}

const readStudent=async()=>{
    const db=await connectDB();
    const data=await db.collection("primary").find().toArray();
    // console.log(data);
    return data;
}

app.get('/api',async(req,res)=>{
    const data=await readStudent()
    res.json(data)
});

app.update("/api",async (req,res)=>{
    
})

app.listen(4000,()=>{
    console.log("server started");
})


// addStudent();
readStudent();