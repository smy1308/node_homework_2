require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.port;

const productsRouter = require('./routes/products.router.js');
const connect = require('./schemas/index');
connect();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', [productsRouter]);
  
app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});