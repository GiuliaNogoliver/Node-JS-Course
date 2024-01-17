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

var port = process.env.PORT || 3001;
app.listen(port);
console.log("Server listening at " + port);