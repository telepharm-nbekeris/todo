var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.listen(1337);

console.log('Express server running on 1337');