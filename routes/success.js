const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();


router.get('/success', (req, res, next) => {
    console.log(req.body);
    // res.send('<h1>Successfully Submitted</h1>')
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
});



module.exports = router;