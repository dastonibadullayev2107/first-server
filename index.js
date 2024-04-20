const http = require('http');
const fs=require('fs');
const path=require('path');
const hostname = "127.0.0.1";
const port = 3023;

const server = http.createServer((req, res) => {
 const filePath=path.join(__dirname, 'index.html');


 fs.readFile(filePath, (err,data)=>{


   if(err){
      res.writeHead(500)
      res.end("Error loading the file:"+err.code)
   }
   else{
      res.writeHead(200,{ 'Content-Type':'text/html' });
      res.end(data, 'utf-8');
   }
 });
});

server.listen(port, hostname, () => 
{
  console.log(`Server running at http://${hostname}:${port}/`);
});