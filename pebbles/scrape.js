var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8000;


// var url= 'http://zipatlas.com/us/ca/zip-code-comparison/median-household-income.htm';
// request(url, function(err, resp, body){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log(body);
//   }
// })
var destination = fs.createWriteStream('./downloads/zipatlas.htm');
var url= 'http://zipatlas.com/us/ca/zip-code-comparison/median-household-income.htm';
request(url).pipe(destination);

app.listen(port);
console.log('server is listening:' + port);
