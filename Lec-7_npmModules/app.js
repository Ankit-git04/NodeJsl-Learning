const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);

    if(req.url ==='/'){
    res.write(`
          
      <html lang="en">
     <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>home </title>
    </head>
    <body>
    <h1>this is dummy jjtesxtddd</h1>
   </body>
   </html>
        `)

        res.end();

    }
    
});

const port=4000;
server.listen(port,()=>{
        console.log(`Server is running on address http://localhost:${port}`);
});