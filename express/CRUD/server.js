import express from 'express'

const app=express();
app.use(express.json())

let users=[
    {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    },
    {
     "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    },
    {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    }
]

// Todo get 
app.get("/api",(req,res)=>{
    res.json(users);
})

// Todo post
app.post("/api",(req,res)=>{
    users.push(req.body);
    res.json({msg:"user inserted successfully",users})
})

// Todo put
app.put("/api",(req,res)=>{
    const body=req.body;
    users=users.map((user)=>{
        if(user.id==body.id){
            return body;
        }
        return user;
    });
    res.json(users);
});

// Todo delete
app.delete("/api",(req,res)=>{
    users=users.filter((user)=>user.id != req.query.id)
    res.json({message:"user deleted successfully",users})
})

app.listen(1818,()=>{
    console.log("server started on 1818")
})