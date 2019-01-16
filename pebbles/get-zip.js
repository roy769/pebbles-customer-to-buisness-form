var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8080;
// app.set('view engine', 'handlebars');
// app.set('views', path.join(_dirname, 'views'));
var url = "http://zipatlas.com/us/ca/zip-code-comparison/median-household-income.htm";

request(url, function(err, resp, body) {
	var $ = cheerio.load(body);
	var report = $('.report_data');
	var reportDataText = report.text();

	var zipCode = $('.report_data a');
	var zipCodeText = zipCode.text();

	var averageMedianIncome = $('.report_data b');
	var averageMedianIncomeText = averageMedianIncome.text();

	var median = {
		zipCode: zipCodeText,
		averageMedianIncome: averageMedianIncomeText
	}
	console.log(median);
})
app.listen(port);
console.log('server is listening:' + port);
