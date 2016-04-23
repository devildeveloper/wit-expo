'use strict'
var ip_server = 'https://www.google.com.pe';
casper.test.begin('Wit test example', 2, function suite(test) {
	casper.start(ip_server, function() {
		test.assertTitle("Google", "demo website title");
		test.assertExists('form', "main form is found");
		this.fill('form', {
			q: "maliaga.pantoja@gmail.com"
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
