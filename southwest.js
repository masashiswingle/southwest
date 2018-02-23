
var router = require('express').Router();
var selenium = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var schedule = require('node-schedule');


router.get('/', function(req, res){
	return res.status(200).send('ping!');
})


router.post('/southwest', function(req, res){
	if (!req.body.firstname || !req.body.lastname){
		return res.status(400).send({message: "Incomplete Name Input"});
	}
	if (!req.body.confirmation || req.body.confirmation.length > 6){
		return res.status(400).send({message: "Invalid Confirmation #"})
	}
	if(!req.body.date || req.body.date.length > 6){
		if (req.body.date[0] < 2018) return res.status(400).send("quit trolling, hoe");
		return res.status(400).send({message: "Incomplete Date Entered"})
	}

	var date = newDate(req.body[0], req.body[1], req.body[2], req.body[3], req.body[4], 0);
	}
		schedule.scheduleJob(date, function (){
			var service = new chrome.ServiceBuilder(path).build();
			chrome.setDefaultService(service);

			var driver = new selenium.Builder()
				.withCapabilities(selenium.Capabilities.chrome())
				.build();

				driver.get('https://www.southwest.com/air/check-in/index.html?redirectToVision=true&leapfrogRequest=true')
				driver.findElement(selenium.By.id('confirmationNumber')).sendKeys(req.body.confirmation);
				driver.findElement(selenium.By.id('passengerFirstName')).sendKeys(req.body.firstname);
				driver.findElement(selenium.By.id('passengerLastName')).sendKeys(req.body.lastname);
				driver.findElement(selenium.By.id('form-mixin--submit-button')).click();
	});

	return res.send('here');
});


function southwestSnipe (req, res){
	//console.log('wow', req.body);
	return res.send('here');
	// var date = new Date(2018, 1, 22, 20, 19, 0);
	// var firstTest = schedule.scheduleJob(date, function (){
	// 	var service = new chrome.ServiceBuilder(path).build();
	// 	chrome.setDefaultService(service);

	// 	var driver = new selenium.Builder()
	// 	.withCapabilities(selenium.Capabilities.chrome())
	// 	.build();

	// 	driver.get('https://www.southwest.com/air/check-in/index.html?redirectToVision=true&leapfrogRequest=true')
	// 	driver.findElement(selenium.By.id('confirmationNumber')).sendKeys('simple');
	// 	driver.findElement(selenium.By.id('passengerFirstName')).sendKeys('Masashi');
	// 	driver.findElement(selenium.By.id('passengerLastName')).sendKeys('Swingle');
	// 	driver.findElement(selenium.By.id('form-mixin--submit-button')).click();
	// });
}


module.exports = router; 


