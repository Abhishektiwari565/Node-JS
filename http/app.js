const http=require("http")

const server=http.createServer((req,res)=>{
    const date=new Date()
    res.writeHead(200,{"content-type":"text/plain"});
    res.end("user enter at "+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())
}) 

server.listen(3000,()=>{
    console.log("server running successfully!!!")
})