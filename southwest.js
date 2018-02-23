
var router = require('express').Router();
var selenium = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var schedule = require('node-schedule');

router.get('/', function(req, res){
	return res.status(200).send('ping!');
})

router.post('/southwest', function(req, res){
	// console.log(req.body);
	// return res.send('a')
	//swarp dates to comp lang



	req.body.date = JSON.parse(req.body.date);
	if (!req.body.firstname || !req.body.lastname){
		return res.status(400).send({message: "Incomplete Name Input"});
	}
	if (!req.body.confirmation || req.body.confirmation.length > 6){
		return res.status(400).send({message: "Invalid Confirmation #"})
	}
	if((!req.body.date) || req.body.date.length > 6 || !Array.isArray(req.body.date) ){
		console.log(req.body.date.length)
		console.log(Array.isArray(req.body.date))
		return res.status(400).send({message: "Incomplete Date Entered"});
	}
	if (req.body.date[0] < 2018) return res.status(400).send("quit trolling, hoe");
	//(2012, 11, 21, 5, 30, 0); Year / Month 0-11 / Hour / Minute / Second
	southwestSnipe(req, res);
	// var date = new Date(req.body.date[0], req.body.date[1], req.body.date[2], req.body.date[3], req.body.date[4], 0);
	
	// var first = schedule.scheduleJob(date, function (){
	// 	var service = new chrome.ServiceBuilder(path).build();
	// 	chrome.setDefaultService(service);

	// 	var driver = new selenium.Builder()
	// 		.withCapabilities(selenium.Capabilities.chrome())
	// 		.build();

	// 	driver.get('https://www.southwest.com/air/check-in/index.html?redirectToVision=true&leapfrogRequest=true')
	// 	driver.findElement(selenium.By.id('confirmationNumber')).sendKeys(req.body.confirmation);
	// 	driver.findElement(selenium.By.id('passengerFirstName')).sendKeys(req.body.firstname);
	// 	driver.findElement(selenium.By.id('passengerLastName')).sendKeys(req.body.lastname);
	// 	driver.findElement(selenium.By.id('form-mixin--submit-button')).click();
		
		// driver.wait(until.elementIsVisible(selenium.By.id('passengerLastName')), 10);
		// driver.quit();

	//});

});

function southwestSnipe (req, res) {
	console.log('made it');
	// var date = new Date(req.body.date[0], req.body.date[1], req.body.date[2], req.body.date[3], req.body.date[4], 0);
	
	// var first = schedule.scheduleJob(date, function (){
		console.log('got in here')
		var service = new chrome.ServiceBuilder(path).build();
		chrome.setDefaultService(service);

		var driver = new selenium.Builder()
			.withCapabilities(selenium.Capabilities.chrome())
			.build();
			console.log(driver)
		driver.get('https://www.southwest.com/air/check-in/index.html?redirectToVision=true&leapfrogRequest=true')
		driver.wait(function(){

		}, 10000); 
		driver.findElement(selenium.By.id('confirmationNumber')).sendKeys(req.body.confirmation);
		driver.findElement(selenium.By.id('passengerFirstName')).sendKeys(req.body.firstname);
		driver.findElement(selenium.By.id('passengerLastName')).sendKeys(req.body.lastname);
		driver.findElement(selenium.By.id('form-mixin--submit-button')).click();	
		driver.findElement(selenium.By.id('form-mixin--submit-button')).click();	
		driver.findElement(selenium.By.id('form-mixin--submit-button')).click();		
		driver.wait(function () {
		}, 3000);
		 //driver.quit();
		return res.status(200).send({message: "Successful Snipe will be Executed :)"});
 	//})
}


module.exports = router; 


