const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    nombre: "Byron Estuardo Solís González",
    cancion_favorita: "NOMBRE_DE_TU_CANCIÓN"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});