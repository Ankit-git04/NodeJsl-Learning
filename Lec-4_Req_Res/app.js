const http =require("http");
const fs=require('fs');  


const server=http.createServer((req,res)=>{
        console.log(req.url ,req.method, req.headers);

    if(req.url==='/'){
      res.setHeader('Content-Type','text/html');
      res.write('<html>');
      res.write('<head><title>My First Page</title></head>');
      res.write('<body><h1>Hello from my Node.js Server!</h1>');
      res.write('<p>Please fill The Form.</p>');

      res.write('<form action="/form-submit" method="POST">');
      res.write('<input type="text" name="username" placeholder="Enter your name" required>');
     res.write('<label for="male">Male</label>');
res.write('<input type="radio" id="male" name="gender" value="male">');

res.write('<label for="female">Female</label>');
res.write('<input type="radio" id="female" name="gender" value="female">');

      res.write('<button type="submit">Submit</button>');
      res.write('</form>');

       res.write('</body>');
      res.write('</html>');
      
     return  res.end();
    }
    else if(req.url.toLowerCase()=='/form-submit' && req.method==='POST'){
        fs.writeFileSync('user.txt',`Username:Ankit ,
            Gender: Male`); 
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
    else if(req.url==='/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>About Us</title></head>');
        res.write('<body><h1>About Us</h1><p>This is the about page.</p></body>');
        res.write('</html>');
        return res.end();
    }
    else{
        res.setHeader('Content-Type','text/html');
      res.write('<html>');
      res.write('<head><title>My First Page</title></head>');
      res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
      res.write('</html>');
    }

    
})

const port=4000;
server.listen(port,()=>{
        console.log(`Server is running on address http://localhost:${port}`);

})