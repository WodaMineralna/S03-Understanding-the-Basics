const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers) // the most important fields
})

server.listen(3000)