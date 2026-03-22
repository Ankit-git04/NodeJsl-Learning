const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home</title></head>");
    res.write("<body>");
    res.write(`
              <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/men">Men</a></li>
                        <li><a href="/women">Women</a></li>
                        <li><a href="/kids">Kids</a></li>
                         <li><a href="/cart">Cart</a></li>
                    </ul>
               </nav>
               `);

    res.write("</body>");
    res.write("</html>");
    return res.end();
    }
    else if (req.url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Home Page</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
             
  }
  else if (req.url === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Men</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Men's Section</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } 
  else if (req.url === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>  Women</title></head>");   
    res.write("<body>");
    res.write("<h1  >Welcome to Women's Section</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
    else if (req.url === "/kids") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Kids</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Kids' Section</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
    else if (req.url === "/cart") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Cart</title></head>");
    res.write("<body>");
    res.write("<h1>Your Cart is Empty</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
    else {  
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>404 Not Found</title></head>");
    res.write("<body>");
    res.write("<h1>404 Not Found</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
});

server.listen(4000, () => {
  console.log("Server is running on address http://localhost:4000");
});
