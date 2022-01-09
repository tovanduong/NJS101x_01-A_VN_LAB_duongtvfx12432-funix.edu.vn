const http = require('http')
const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/') {
        res.write('<HTML><head><title>Enter massage</title></head><body><Form action="/massage" method="POST"><input type="text" name="massage"/><button type="submit">nhap</button></Form></body></HTML>')
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<HTML><head><title>My First Page</title></head><body><h1>Hello from my NodeJs Sever</h1></body></HTML>')
})

server.listen(3000)