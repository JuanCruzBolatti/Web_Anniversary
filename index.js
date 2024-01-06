var express = require('express');
var app = express();

/* Set up handlebars view engine */ 
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

/* Set Port */ 
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

/* Routing */
app.get('/nosotros', function (req, res) {
    res.render('about', { 
        title: "Sobre nosotros",
    });
});
app.get('/poemario/improvisacion_de_un_querer', function (req, res) {
    res.render('poemario', { 
        title: "Poemario - Improvisacion de un Querer",
        tituloPoemario: "Improvisacion de un Querer",
    });
});
app.get('/cositas', function (req, res) {
    res.render('cositas', { 
        title: "Poemario - Cositas",
    });
});
app.get('/', function (req, res) {
    res.render('home', { 
        title: "Aniversario",
    });
});

/* Port in console */
app.listen(app.get('port'), function(){
    console.log('Started on http://localhost:' +
    app.get('port'));
});