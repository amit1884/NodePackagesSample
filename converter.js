var json2csv = require('json2csv').parse;
var fs = require('fs');
var fields = ['car','price', 'color'];
var myCars = [

    {
        "car":"ferrari",
        "price": 30000,
        "color": "white"
    },
    {
        "car":"BMW",
        "price": 40000,
        "color": "blue"
    },
     {
        "car":"mercedes",
        "price": 35000,
        "color": "black"
    }, 
    {
        "car":"lamborgini",
        "price": 60000,
        "color": "green"
    }
];
var csv = json2csv(myCars,{fields: fields });

fs.writeFile('file2.csv', csv, function(err) {
if (err) throw err;
console.log('fileed');
});

