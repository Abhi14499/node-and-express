const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

router.get('/contact-us', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactUs.html'));
});

// /admin/add-product => POST
router.post('/contact-us', (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
});

router.use('/success', (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
});

module.exports = router;
