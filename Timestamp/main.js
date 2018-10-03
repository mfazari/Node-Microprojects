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

    //Gets the request data for date
    var dateVal = req.params.dateVal;
    //Options for formatting date in natural date view
    var dateFormattingOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    if(isNaN(dateVal)){ //isnan checks whether number is an illegal number (not a number)
        var naturalDate = new Date(dateVal);
        naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions); // December 15, 2015
        var unixDate = new Date(dateVal).getTime()/1000;
    }
    else{
        var unixDate = dateVal;
        var naturalDate = new Date(dateVal * 1000);

        naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);

    }
    res.json({unix: dateVal, natural: naturalDate});

});

app.listen(3000, function(){

    console.log("Working");
});
