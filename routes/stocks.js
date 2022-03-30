const express = require('express');
const router = express.Router();
const stockcontroller= require('../controllers/stocks');

router.get('/stockinput',stockcontroller.stockinput);
router.post('/get-stock-data',stockcontroller.getstockdata);
module.exports= router;
