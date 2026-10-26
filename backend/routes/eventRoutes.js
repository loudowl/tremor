const express = require('express');
const router = express.Router();
const { getEvents, matchMarkets } = require('../controllers/eventController');

router.get('/events', getEvents);
router.post('/events/match', matchMarkets);

module.exports = router;
