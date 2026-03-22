

const calpagehandler=(req,res)=>{
    if(req.url==='/calculator'){
        res.setHeader('Content-Type','text/html');  
        res.write('<html>');
        res.write('<head><title>Calculator</title></head>');
        res.write('<body><h1>Simple Calculator</h1>');
        res.write('<form action="/form-submit" method="POST">');
        res.write('<label for="num1">Number 1:</label>');
        res.write('<input type="number" id="num1" name="num1" required><br><br>');
        res.write('<label for="num2">Number 2:</label>');
        res.write('<input type="number" id="num2" name="num2" required><br><br>');
        res.write('<label for="operation">Operation:</label>');
        res.write('<select id="operation" name="operation" required>'); 
        res.write('<option value="add">Add</option>');
        res.write('<option value="subtract">Subtract</option>');
        res.write('<option value="multiply">Multiply</option>');
        res.write('<option value="divide">Divide</option>');
        res.write('</select><br><br>');
        res.write('<button type="submit">Calculate</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
};

module.exports=calpagehandler;