// const http = require("http");

const express = require("express");
const bodyparser = require("body-parser");


const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

// app.use('/', (req, res, next) => {
//     console.log('This always runs');
//     // res.send('<h1>Add Product page </h1>');
//     // next();
// })

app.use('/add-product', (req, res, next) => {
    // console.log('In the another middleware');
    // res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="quantity"><button type="submit">Add Product</button></form>');
})

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})


app.use('/', (req, res, next) => {
    // console.log('In the another middleware');
    res.send('<h1>Hello from Express</h1>');
})




app.listen(3000);