//* Routing Logic

const express = require('express');
const router = express.Router();
const transactionsCtrl = require('../../controllers/api/transactions');


// GET /api/transactions
router.post('/transactions', transactionsCtrl.index)

module.exports = router;