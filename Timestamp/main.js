//Basic required imports for Node

var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');



//Create an instance of express

var app = module.exports = express();
app.use(bodyparser.json());
app.use(cors());

//Main
app.get('/dateValues/:dateVal', function(req, res, next){

    var dateVal = req.params.dateVal;
    res.json({unix: dateVal});

});




app.listen(3000, function(){

    console.log("Working");
});
