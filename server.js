// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// API endpoint for /api/whoami
app.get('/api/whoami', (req, res) => {
    // Obtener dirección IP
    let ipaddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // Convertir IPv6 mapeado a IPv4
    if (ipaddress.startsWith('::ffff:')) {
        ipaddress = ipaddress.split('::ffff:')[1];
    }

    // Obtener solo el primer idioma
    const language = (req.headers['accept-language'] || 'unknown').split(',')[0];

    // Obtener información del software
    const software = req.headers['user-agent'] || 'unknown';

    // Respuesta en formato JSON
    res.json({
        ipaddress: ipaddress,   // Ejemplo: 192.168.171.139
        language: language,     // Ejemplo: es-419
        software: software      // Ejemplo: Mozilla/5.0...
    });
});


// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
