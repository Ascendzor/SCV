var express = require('express');
var leExpress = express();
var mongoClient = require('mongodb').MongoClient;

var db;

mongoClient.connect('mongodb://localhost:27017/Hardwares:', function(err, database) {
	if(err) {
		console.log('le error');
		return;
	}
	console.log('connection to database success!');
	db = database;
});

leExpress.use(express.static(__dirname + '/public'));
leExpress.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});

leExpress.post('/submitHardware', function(req, res) {
	req.on('data', function(chunk) {
		var leObject = JSON.parse(chunk);
		console.log('your hardware: ' + leObject.name);
	});
	res.writeHead(200, {'Content-Type': 'application/json' });
	res.write(JSON.stringify({leValue: 'value from server'}));
	res.end();
});

leExpress.listen(process.env.PORT || 1338);
console.log('listening on 1338');