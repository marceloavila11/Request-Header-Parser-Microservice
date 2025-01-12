const express = require('express');
const app = express();

// Middleware para servir la carpeta pública (si se desea agregar una página web)
app.use(express.static('public'));

// Ruta para el endpoint /api/whoami
app.get('/api/whoami', (req, res) => {
    // Obtener datos del cliente
    const ipaddress = req.ip || req.connection.remoteAddress;
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];

    // Responder con el JSON requerido
    res.json({
        ipaddress,
        language,
        software,
    });
});

// Configurar el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
