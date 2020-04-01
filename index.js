var express =require('express');
var path=require('path');
var json2csv = require('json2csv').parse;
var fs = require('fs');
var FuzzySearch=require('fuzzy-search');
var multer=require('multer')
var app=express();
app.set("view engine","ejs");
app.set('views',path.join(__dirname,'views'));
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.render('index');
});


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  var upload = multer({ storage: storage }) 

app.post('/profile',upload.single('avatar'),(req,res,next)=>{

var avt=req.file;
console.log(avt);
res.send(avt);
})


app.get('/download',(req,res)=>{
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

fs.writeFile('../file6.csv', csv, function(err) {
if (err) throw err;
console.log('fileed');
res.send('converted')
});

})

app.get('/search',(req,res)=>{
    var searchCont=req.query.find;
    console.log(searchCont);
    const people = [{
        name: {
          firstName: 'Amit',
          lastName: 'Raj',
        },
        state: 'Seattle',
      }];

         
  const searcher = new FuzzySearch(people, ['name.firstName','name.lastName', 'state'], {
    caseSensitive: false,
  });
  const result = searcher.search(searchCont);
  res.send(result);
});




app.listen(3000,()=>{
    console.log('server started');
});