const http=require('http');
const ReqHandler=require('./user');

const server=http.createServer(ReqHandler);

const port=4000;
server.listen(port,()=>{
        console.log(`Server is running on address http://localhost:${port}`);
});