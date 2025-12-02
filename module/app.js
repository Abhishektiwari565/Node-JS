// what is node js ?
// node js is an open source, cross platform and server side js runtime enviroment.
// it allows developers to run javascript on your comupter and system instead of outside the browser. 


// const math=require("./math.js")

// math.add(10,5)
// math.sub(20,2)

const fs=require("fs");


fs.writeFileSync("notes.txt","hello world")

const data=fs.readFileSync("notes.txt","utf-8")
console.log(data);

fs.appendFileSync("notes.txt","/nlearning nodes js ")