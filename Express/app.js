var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

// crie um manipulador de roteador para o caminho inicial
app.get('/', function(req, res){
    res.render('index',{
        title: 'My page'
    });
    //res.send('Hello World!');
});

app.listen(3001);
console.log("Server listening at 127.0.0.1:3001");