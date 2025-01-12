const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Habilitar CORS

app.get('/api/whoami', (req, res) => {
  // Obtener la dirección IP, el idioma y la información del software
  const ipaddress = req.headers['x-forwarded-for'] || req.ip;
  const language = req.headers['accept-language'] || 'unknown';
  const software = req.headers['user-agent'] || 'unknown';

  // Enviar respuesta en formato JSON
  res.json({
    ipaddress,
    language,
    software,
  });
});

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
