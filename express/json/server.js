import express from 'express';
import fs, { writeFileSync } from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const app=express();
app.use(express.json());

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const filepath=path.join(__dirname,"db.json");

const readUser=()=>{
     const data=fs.readFileSync(filepath,"utf-8")
     return JSON.parse(data);
}

const writeUser=(users)=>{
    fs.writeFileSync(filepath,JSON.stringify(users));
}

app.get("/",(req,res)=>{
   const users=readUser();
    res.json(users);
});

app.post("/",(req,res)=>{
    const users=readUser();
   users.push(req.body);
   writeUser(users);
   res.json({message:"user inserted"})
});

app.delete("/:id",(req,res)=>{
   let users= readUser()
   const id=req.params.id
   users=users.filter((user)=>user.id != id);
   writeUser(users);
   res.json({message:"user deleted "})
    
})

app.listen(3000,()=>{
    console.log("server started");
})

