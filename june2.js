//CREATING BASIC API USING NODE JS
const http = require('http');
const data = require('./june2data');
const server = http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'application\json'})
res.write(JSON.stringify(data))
res.end()
})
server.listen(5000);
