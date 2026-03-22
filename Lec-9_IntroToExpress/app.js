const http=require('http');
const ReqHandler=require('./user');

const express=require('express');
const app=express();

app.get("/",(req,res,next)=>{
      console.log("I am Running 1");
      res.send(`<p>This first express</p>`);
//       next();
})
app.get("/form-submit",(req,res,next)=>{
      console.log("I am Running 2");
      res.send(`<p>this  is form submit</p>`);
      
})


// const server=http.createServer(app);
const port=4000;
app.listen(port,()=>{
        console.log(`Server is running on address http://localhost:${port}`);
});