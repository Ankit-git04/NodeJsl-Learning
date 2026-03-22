const fs=require('fs');  


const userReqhandler=(req,res)=>{
        console.log(req.url ,req.method);

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
        
        const body=[];
        req.on('data',(chunks)=>{
        console.log(chunks);
        body.push(chunks);
        });
        req.on('end',()=>{
        const fullBody=Buffer.concat(body).toString();
        console.log(fullBody);

      
        const params=new URLSearchParams(fullBody); 
        //  const bodyObject={};
        // for(const [key,value] of params.entries()){
        //     bodyObject[key]=value;
        // }
        bodyObject=Object.fromEntries(params);
        console.log(bodyObject);
        fs.writeFileSync('user.txt',JSON.stringify(bodyObject)); 
    });
        
        
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

    
}

module.exports=userReqhandler;