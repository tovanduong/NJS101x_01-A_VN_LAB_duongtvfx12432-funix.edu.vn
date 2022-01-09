const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<HTML><head><title>Enter massage</title></head><body><Form action="/massage" method="POST"><input type="text" name="massage"/><button type="submit">nhap</button></Form></body></HTML>')
        return res.end();
    }
    if (url === '/massage' && method==='POST') {
        const body =[];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const massage = parseBody.split('=')[1];
            console.log(massage);
            fs.writeFileSync('massage.txt', massage)
        })
        res.statusCode=302;
        res.setHeader('Location', '/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<HTML><head><title>My First Page</title></head><body><h1>Hello from my NodeJs Sever</h1></body></HTML>')
}

module.exports = {
    handler: requestHandler,
    someText: 'Some text'
}