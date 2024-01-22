var express = require('express');
var app = express();
const path = require('path');
const fs = require('fs');

/* Set up handlebars view engine */
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

/* Set Port */
// app.set('port', process.env.PORT || 3000);
const PORT = process.env.PORT || 3000
app.use(express.static(__dirname + '/public'));

/* Routing */
app.get('/nosotros', function (req, res) {
    res.render('about', {
        title: "Sobre nosotros",
    });
});
app.get('/poemario/:id', function (req, res) {
    const poemariosPath = path.join(__dirname, 'data', 'poemas.json');

    fs.readFile(poemariosPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor');
            return;
        }

        const poemarios = JSON.parse(data);
        const poema = poemarios.poemarios.find(p => p.id === req.params.id);

        if (!poema) {
            res.status(404).send('Libro no encontrado');
            return;
        }

        res.render('poemario', {
            title: "Poemario - " + poema.tituloPoemario,
            tituloPoemario: poema.tituloPoemario,
            tag: poema.tag,
            linkVideo: poema.link.linkVideo,
            linkFoto: poema.link.linkFoto,
            linkAudio: poema.link.linkAudio,
            explicacion: poema.explicacion,
            poemas: poema.poemas,
        });
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

app.listen(process.env.PORT || 3000);