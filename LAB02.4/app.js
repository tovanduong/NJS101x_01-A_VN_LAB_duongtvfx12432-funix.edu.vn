// const http = require('http')

const express = require('express')

const app = express();

app.use('/', (req, res, next)=> {
    console.log('It always run!');
    next();
})

app.use('/add-product', (req, res, next)=> {
    console.log('In the another Middleware!');
    res.send('<h1>The Add product page</h1>');
})

app.use('/', (req, res, next)=> {
    console.log('In the another Middlewaree!');
    res.send('<h1>Hello from Express.js</h1>');
})

// const server = http.createServer(app)

app.listen(3000)