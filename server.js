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

app.get('/', function(req, res){
  res.render('home', {
    story1: 'There\'s allegedly a scandal involving some Secret Service members. Dude, some people are living their life. Got it? Cool, how about you do your shitty work',
    story2: 'Some football star accompanied some 17 year old leukemia patient to her prom. That\'s quite nice of him, isn\'t it. You\'re directing attention to this? Do you have an infinite supply of attention? No.',
    story3: 'Attacks subside in the Afghan capital. Does this affect your life? Nope.',
    date: d2,
//    details1: 
  });
});
console.log(Date.getDate();
app.listen(process.env['app_port'] || 3000);



