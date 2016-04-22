'use strict'
const PORT = process.env.PORT || 3000;
const path = require('path');
var express = require('express');
var app = express();
app.use('/static', express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/views/app.html'));
});
app.listen(PORT, ()=> {
	 console.log('listening')
});
