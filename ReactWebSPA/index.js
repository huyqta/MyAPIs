var express = require('express');
var mysql = require('mysql');
var utf8 = require('utf8');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(3000);
app.get('/', function(req, res){
  res.render('home');
});

var db_config = { host : '35.184.113.156', user : 'root', password : 'root', database : 'generaldb',};
var connection = mysql.createConnection(db_config);

//app.get('/category/getAllCategory', function(req, res){
//  connection.query('SELECT * FROM Category LIMIT 9',
//    function selectCb(err, results, fields) {
//        if (err) {
//            console.log("ERROR: " + err.message);
//            throw err;
//        }
//        res.send(results);
//      });
//});

//app.get('/category/getProductByCategory/:uid', function(req, res){
//  var sql = 'SELECT Product.*, Category.Name as CategoryName FROM Product INNER JOIN Category ON Product.CategoryId = Category.Id WHERE Product.CategoryId = "' + req.params.uid + '"';
//  connection.query(sql, function (err, results) {
//    if (err) throw err;
//    console.log("Result: " + results);
//    res.send(results);
//  });
//});