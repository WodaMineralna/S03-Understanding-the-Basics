const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers); // the most important fields

  res.setHeader("Content-Type", "text/html"); // * here we specify that we we pass HTML Code as a response
  res.write("<html>");
  res.write("<head><title>My First NodeJS Page!</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
