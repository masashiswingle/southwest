var express = require('express');
var app = express();
var port = process.env.PORT || 6969; 
var bodyParser = require('body-parser');
var southwest = require('./southwest');

app.disable('x-powered-by'); //don't flaunt express

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); //parse json and www-form-urlencoded

app.use('/', express.static('public'));
// app.get('/', function (req, res){
// 	return res.status(200).send('pong')
// })

app.use('/api', southwest);

app.listen(port, function(){
	console.log('Server is listening on http://localhost:' + port)
});



