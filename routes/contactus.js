const express = require('express');

const productsController = require('../controllers/contactus');

const router = express.Router();

router.get('/contact-us', productsController.getContactUs);

router.post('/contact-us', productsController.postContactUs);

module.exports = router;