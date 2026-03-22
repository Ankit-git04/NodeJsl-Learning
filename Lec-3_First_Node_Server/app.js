const http =require("http");

// function requestlistener(req,res){
//       console.log(req);
// }
// http.createServer(requestlistener);
            //OR

const server=http.createServer((req,res)=>{
        console.log(req);

        process.exit();  //stops the current loop
})

const PORT=3000;
server.listen(PORT,()=>{
        console.log(`Server is running on address http://localhost: ${PORT}`);

})