const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Ruta para la API
app.get('/api/whoami', (req, res) => {
    const ipaddress = req.ip || req.connection.remoteAddress;
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];

    res.json({
        ipaddress: ipaddress,
        language: language,
        software: software,
    });
});

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
