import http from 'http'
import fs from 'fs'

const server=http.createServer((req,res)=>{
    const date=new Date();
    const log=`client request on http://localhost:4000 ${req.url } by ${req.method} at ${date.getDate()}-${date.getMonth()}-${date.getFullYear()} || ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}\n`
    fs.appendFileSync("logs_detail.txt",log)
    if(req.url==="/" && req.method==="GET"){
    res.writeHead(200,{"content-type":"text/plain"})
    res.end("server started GET request")
    }else if(req.url==="/" && req.method==="POST"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("server started POST request")
    }else if(req.url==="/" && req.method==="DELETE"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("server started DELETE request")
    }else if(req.url==="/" && req.method==="PUT"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("server started PUT request")
    }
      
})

server.listen(4000,()=>{
    console.log("server started")
})