const http=require('http');
const routers=require('./routers');

const server=http.createServer(routers);

const port=4000;
server.listen(port,()=>{
        console.log(`Server is running on address http://localhost:${port}`);
});