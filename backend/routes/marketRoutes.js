const express = require('express');
const router = express.Router();
const { getMarketDetails } = require('../controllers/marketController');

router.get('/markets/:slug', getMarketDetails);

module.exports = router;
