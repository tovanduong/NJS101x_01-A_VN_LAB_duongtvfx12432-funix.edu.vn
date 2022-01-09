const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.header)
    res.setHeader('Content-Type', 'text/html');
    res.write('<HTML><head><title>My First Page</title></head><body><h1>Hello from my NodeJs Sever</h1></body></HTML>')
})

server.listen(3000)