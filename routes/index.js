'use strict';
var express = require('express');
var router = express.Router();
//Abhishek Kanojia
//Student number: 200424380

router.get('/', function (req, res) {
   //declaring variable to fetch the mehod
    var method = req.query.method;
    //declaring variables to store the values
    var x = req.query.x;
    var y = req.query.y;
    //declaring variable to store result
    var result = 0;
   //using if else conditions
    if (method == "add") {
        result = x + " + " + y + " = " + (parseInt(x) + parseInt(y));
    } else if (method == "subtract") {
        result = x + " - " + y + " = " + (parseInt(x) - parseInt(y));
    } else if (method == "multiply") {
        result = x + " * " + y + " = " + (parseInt(x) * parseInt(y));
    } else if (method == "divide") {
        result = x + " / " + y + " = " + (parseInt(x) / parseInt(y));
    } else {
        result = "Error 404 not found";
    }
    console.log(result);
    res.render('index', { title: 'Express' });

   
});

module.exports = router;
