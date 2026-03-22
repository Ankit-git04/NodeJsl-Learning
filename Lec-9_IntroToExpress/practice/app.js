const express = require('express');

const app=express();
app.get("/",(req,res,next)=>{
      console.log(req.url,req.method);
      res.send(`<p>This first middleware</p>
        <button onclick="location.href='/about'">About Us</button>`);
    //   next();
})

app.use(express.urlencoded({ extended: false }));  //middleware to parse
app.get("/about",(req,res,next)=>{
      console.log(req.url,req.method);
        res.send(`<p>This is about us page</p>
            <form action="/about" method="POST">
            <label for="name">Name:</label>
            <input type="text" name="name"  id ="name" placeholder="Enter your name">
            <label for="email">Email:</label>
            <input type="text"  name="email" id ="email" placeholder="Enter your email">
           <button type="submit">Submit</button>
            </form>
            `);
        // next();
})
app.post("/about",(req,res,next)=>{
      console.log(req.url,req.method);
    //  
     console.log(req.body);
 res.send(`<p>This is Result page  </p>`);

})

app.listen(4000,()=>{
        console.log(`Server is running on address http://localhost:4000`);
});

