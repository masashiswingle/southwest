
var selenium = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var schedule = require('node-schedule');


var date = new Date(2018, 1, 22, 23, 11, 0);
	
	var first = schedule.scheduleJob(date, function (){
	var service = new chrome.ServiceBuilder(path).build();
	chrome.setDefaultService(service);

	var driver = new selenium.Builder()
		.withCapabilities(selenium.Capabilities.chrome())
		.build();

	driver.get('https://www.southwest.com/air/check-in/index.html?redirectToVision=true&leapfrogRequest=true')
	driver.findElement(selenium.By.id('confirmationNumber')).sendKeys("masas");
	driver.findElement(selenium.By.id('passengerFirstName')).sendKeys("tron");
	driver.findElement(selenium.By.id('passengerLastName')).sendKeys("asdas");
	driver.findElement(selenium.By.id('form-mixin--submit-button')).click();
})