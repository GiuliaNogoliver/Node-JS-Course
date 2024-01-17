var express = require('express');
var app = express();

app.set('view', './view');
app.set('view engine', 'jade');

// crie um manipulador de roteador para o caminho inicial
app.get('/', function(req, res){
    res.send('Hello World!');
});

app.listen(3001);
console.log("Server listening at 127.0.0.1:3001");