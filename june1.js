//Creating my first server in Node js

const http =  require("http");

const server = http.createServer((req,res)=>{
    res.write("hello my first serer")
    res.end()
})
server.listen(7865);

