const express = require('express');

const router = express.Router();

const shopController = require('../controllers/products');

router.get('/', shopController.shopGet);

module.exports = router;
