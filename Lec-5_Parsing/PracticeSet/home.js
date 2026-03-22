const fs=require('fs');

const HomePage=(req,res)=>{
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><h1>Welcome to MultiTasking Web Solutions</h1>');
        res.write(`
                <ul>
                    <li><a href="/calculator">Calculator</a></li>
                    <li><a href="/TexEdits">Text Edits</a></li>
                    <li><a href="/ReadLoud">ReadLoud</a></li>
                </ul>
            `)
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
};

module.exports=HomePage;