'use strict'
var ip_server = 'http://127.0.0.1:3000';
casper.test.begin('Wit test example', 2, function suite(test) {
	casper.start(ip_server, function() {
		test.assertTitle("Login example", "demo website title");
		test.assertExists('form', "main form is found");
		this.fill('form', {
			email: "maliaga.pantoja@gmail.com",
			password:"12345678"
		}, true);
	});
	casper.then(function() {
		// capture the entire page.
		casper.capture("page.png");
	});
	casper.run(function() {
		test.done();
	});
});	
