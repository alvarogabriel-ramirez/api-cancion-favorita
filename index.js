const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    nombre: "Alvaro Gabriel Ramirez Alvarez",
    album_favorito: "NOMBRE_DE_TU_ÁLBUM"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});