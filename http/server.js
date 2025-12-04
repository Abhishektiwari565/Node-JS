import http from 'http';
import fs from 'fs'

const PORT=4000

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("Home Page");
    }else if(req.url==="/about"){
        res.writeHead(200,{"content-type":"text/html"});
        const data=fs.readFileSync("./index.html","utf-8")
        res.end(data);
    }else if(req.url==="/contact"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end(" Contact Page");
    }else{
        res.writeHead(404,{"content-type":"text/plain"})
        res.end(" 404 page not found")
    }
})

server.listen(PORT,()=>{
    console.log("Server running on http://localhost:4000")
})