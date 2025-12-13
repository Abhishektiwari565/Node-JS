import express, { json } from 'express'
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'
import cors from 'cors'

const app=express();
app.use(express.json());
app.use(cors())

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const filepath=path.join(__dirname,"db.json");

const ReadTwit=()=>{
    const data=fs.readFileSync(filepath,"utf-8");
    return JSON.parse(data);
}

const WriteTwit=(twits)=>{
    fs.writeFileSync(filepath,JSON.stringify(twits));
}

app.get("/",(req,res)=>{
    const twits=ReadTwit();
    res.json(twits);

})

app.post("/",(req,res)=>{
    const twits=ReadTwit();
    twits.push(req.body);
    WriteTwit(twits);
    res.json({message:"twit uploaded successfully"});
})

app.put("/",(req,res)=>{
    let twits=ReadTwit();
    const body=req.body
   twits=twits.map((twit)=>{
        if(twit.id==body.id){
            return body;
        }
        return twit;
    })
     WriteTwit(twits);
        res.json({message:"twit updated successfully"},twits);
})

app.delete("/:id",(req,res)=>{
    let twits=ReadTwit();
    const id=req.params.id;
    twits=twits.filter((twit)=>twit.id!=id)
    WriteTwit(twits);
    res.json({message:"twit deleted "});

})


app.listen(2500,()=>{
    console.log("server started");
})