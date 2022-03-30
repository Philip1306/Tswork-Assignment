const express = require('express');

const stockroutes = require('./routes/stocks');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(stockroutes);
app.listen(8080);