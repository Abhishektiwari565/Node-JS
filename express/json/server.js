import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());

// Path setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filepath = path.join(__dirname, "db.json");


// Read users
const readUser = () => {
    const data = fs.readFileSync(filepath, "utf-8");
    return JSON.parse(data);
};

// Write users
const writeUser = (users) => {
    fs.writeFileSync(filepath, JSON.stringify(users, null, 4)); // Pretty file
};

app.get("/", (req, res) => {
    const users = readUser();
    const age=req.query.age;
     if(age){
        const data=users.filter((user)=>user.age==(age))
        res.json([data]);
    }
    else {
        res.json(users)
    }

});

// GET all users
app.get("/:id",(req,res)=>{
     const users = readUser();
    const id = req.params.id;
    const name=req.params.name;
     if (id) {
        const data = users.filter((user) => user.id == id)
        res.json([data]);
    }else if(name){
        const data=users.filter((user)=>user.name=name);
        res.json([data]);
    }
    else{
        res.json({message:"user not found"})
    }
})



// POST new user
app.post("/", (req, res) => {
    const users = readUser();
    users.push(req.body);
    writeUser(users);
    res.json({ message: "user inserted" });
});

// PUT update user (without using URL id)
app.put("/", (req, res) => {
    let users = readUser();
    const body = req.body;

    let userFound = false;

    users = users.map(user => {
        if (user.id == Number(body.id)) {
            userFound = true;
            return { ...user, ...body };
        }
        return user;
    });

    if (!userFound) {
        return res.status(404).json({ message: "User not found" });
    }

    writeUser(users);
    res.json({ message: "user updated successfully" });
});

// DELETE user
app.delete("/:id", (req, res) => {
    let users = readUser();
    const id = req.params.id;

    users = users.filter(user => user.id != Number(id));
    writeUser(users);

    res.json({ message: "user deleted" });
});

// Start server
app.listen(3000, () => {
    console.log("server started");
});
