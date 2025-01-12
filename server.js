const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Ruta principal para la API
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

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
