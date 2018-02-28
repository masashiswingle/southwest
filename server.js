const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 6969; 
const bodyParser = require('body-parser');
const southwest = require('./southwest');

app.disable('x-powered-by'); //don't flaunt express

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); //parse json and www-form-urlencoded

app.use('/', express.static('public'));
app.get('/creator',(req, res) =>{
	res.sendFile(path.join(__dirname, 'public/creator/creatorView.html'))
})
// app.get('/', function (req, res){
// 	return res.status(200).send('pong')
// })

app.use('/api', southwest);

app.listen(port, () => {
	console.log('Server is listening on http://localhost:' + port)
});



