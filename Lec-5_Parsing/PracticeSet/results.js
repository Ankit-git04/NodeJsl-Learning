

const calculate=(bodyObject)=>{
    if(bodyObject.operation==='add'){
        bodyObject.result=Number(bodyObject.num1)+Number(bodyObject.num2);  
    }
    else if(bodyObject.operation==='subtract'){
        bodyObject.result=Number(bodyObject.num1)-Number(bodyObject.num2);  
    }
    else if(bodyObject.operation==='multiply'){
        bodyObject.result=Number(bodyObject.num1)*Number(bodyObject.num2);  
    }
    else if(bodyObject.operation==='divide'){
        bodyObject.result=Number(bodyObject.num1)/Number(bodyObject.num2);  
    }
    return bodyObject;
};


const results=(req,res)=>{
    if(req.url==='/form-submit' && req.method==='POST'){
        let body='';    
        req.on('data',(chunks)=>{
            body+=chunks;
        });
        req.on('end',()=>{
            console.log(body);  
            const params=new URLSearchParams(body);
            console.log("After Decoding");
            console.log(params)
            const bodyObject=Object.fromEntries(params);
            console.log(bodyObject);  
            
            calculate(bodyObject);

                console.log("After Operation");
                console.log(bodyObject);

                res.setHeader('Content-Type','text/html');
                res.write('<html>');
                res.write('<head><title>Results</title></head>');
                res.write('<body><h1>Results</h1>');
                res.write(`<p>Number 1: ${bodyObject.num1}</p>`);
                res.write(`<p>Number 2: ${bodyObject.num2}</p>`);
                res.write(`<p>Operation: ${bodyObject.operation}</p>`);
                res.write(`<h2>Result: ${bodyObject.result}</h2>`);
                res.write('</body>');
                res.write('</html>');
                return res.end();
                
        })
    }
};

module.exports=results;