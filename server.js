var http = require('http');
var express = require('express');
var url = require('url');


app = module.exports = express.createServer();

app.configure(function(){
  app.set('views', __dirname + '/files/views');
  app.set('view engine', 'jade');
  app.use(express.logger());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

var d = new Date();
var d2 = d.getDate();
var month1 = d.getMonth() + 1;
var monthname = null;
if (month1 == 1) { monthname = 'January'; }
if (month1 == 2) { monthname = 'February'; }
if (month1 == 3) { monthname = 'March'; }
if (month1 == 4) { monthname = 'April'; }
if (month1 == 5) { monthname = 'May'; }
if (month1 == 6) { monthname = 'June'; }
if (month1 == 7) { monthname = 'July'; }
if (month1 == 8) { monthname = 'August'; }
if (month1 == 9) { monthname = 'September'; }
if (month1 == 10) { monthname = 'October'; }
if (month1 == 11) { monthname = 'November'; }
if (month1 == 12) { monthname = 'December'; }


app.get('/', function(req, res){
  res.render('home', {
    story1: 'There\'s allegedly a scandal involving some Secret Service members. Dude, some people are living their life. Got it? Cool, how about you do your shitty work',
    story2: 'Some football star accompanied some 17 year old leukemia patient to her prom. That\'s quite nice of him, isn\'t it. You\'re directing attention to this? Do you have an infinite supply of attention? No.',
    story3: 'Attacks subside in the Afghan capital. Does this affect your life? Nope. Really? Yup.',
    date: d2,
    month: monthname,
//    details1: 
  });
});
//console.log(Date.getDate());
app.listen(process.env['app_port'] || 3000);



