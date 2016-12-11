var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var exec = require('child_process').exec;
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'public/static')));
app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/api/command', function(req, res) {
	var command = req.body.command;
	exec(command, function(error, stdout, stderr) {
		if (stderr) res.send(stderr);
		else res.send(stdout);
	});
});

app.listen(port, function(){ console.log('listening on port %s', port); });