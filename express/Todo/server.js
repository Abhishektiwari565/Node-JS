import express from 'express'
import fs, { write } from 'fs'
import path from 'path'
import { json } from 'stream/consumers';
import { fileURLToPath } from 'url'

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const filepath = path.join(__dirname, "db.json")

const ReadUser = () => {
    console.log("Reading file:", filepath);
    const data = fs.readFileSync(filepath, "utf-8");
    return JSON.parse(data);
}

const WriteUser = (users) => {
    fs.writeFileSync(filepath, JSON.stringify(users))
}

app.get("/",(req,res)=>{
    const users=ReadUser();
    const status=req.query.status;
    const date=req.query.dueDate;
    if(status){
        const data=users.filter((Todo)=>Todo.status==status);
        res.json([data]);
    }else if(date){
        const data = users.filter(todo => todo.dueDate==date);
        res.json([data]);

    }
    res.json(users)
})
// for Todo get only single user using ID
app.get("/:id", (req, res) => {
    const users = ReadUser();
    const id=req.params.id;
    if(id){

        const data=users.filter((Todo)=>Todo.id==id)
        res.json([data]);
    }

    res.json(users)
})

// for Todo post
app.post("/", (req, res) => {
    const users = ReadUser();
    users.push(req.body);
    WriteUser(users);
    res.json({ message: "user inserted" })
})

// for Todo put
app.put("/", (req, res) => {
    let users = ReadUser();
    const body = req.body;
    let userFound = false;

    users = users.map((Todo) => {
        if (Todo.id == Number(body.id)) {
            userFound = true;
            return { ...Todo, ...body };
        }
        return Todo;
    })
    if (!userFound) {
        res.json({ message: "user not found" });
    }
    WriteUser(users);
    res.json({ message: "user updated successfully" });
})

// for Todo delete
app.delete("/:id", (req, res) => {
    let users = ReadUser();
    const id = req.params.id;
    users = users.filter((Todo) => Todo.id != Number(id))
    WriteUser(users)
    res.json({ message: "user deleted successfully" })
})




// for run server
app.listen(2121, () => {
    console.log("server started");
})