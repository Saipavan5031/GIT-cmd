const http = require('http');

const server = http.createServer((req,res)=> res.end("hello form server....")
);

server.listen(4040,()=>{
    console.log('server is running....');
});