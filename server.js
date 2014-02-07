var express = require('express');
var leExpress = express();

leExpress.use(express.static(__dirname + '/public'));
leExpress.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});

leExpress.post('/indexVM', function(req, res) {
	req.on('data', function(chunk) {
		var leObject = JSON.parse(chunk);
		console.log('your budget: ' + leObject.budget);
	});
	res.writeHead(200, {'Content-Type': 'application/json' });
	res.write(JSON.stringify({leValue: 'value from server'}));
	res.end();
});

leExpress.listen(process.env.PORT || 1337);
console.log('listening on 1337');