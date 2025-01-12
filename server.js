const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Endpoint API /whoami
app.get('/api/whoami', (req, res) => {
  // Obtener la dirección IP del cliente
  const ipAddress = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;

  // Obtener el idioma preferido del cliente
  const language = req.headers['accept-language'];

  // Obtener la información del software del cliente
  const software = req.headers['user-agent'];

  // Responder con un JSON con los valores requeridos
  res.json({
    ipaddress: ipAddress,
    language: language,
    software: software,
  });
});

// Escuchar en el puerto configurado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
