const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Ruta para buscar usuario por nombre utilizando parámetros de consulta
app.get('/usuarios', (req, res) => {
    const nombre = req.query.nombre; // Obtén el parámetro "nombre" de la consulta

    if (!nombre) {
        return res.status(400).send('Por favor, proporciona un nombre en la consulta.');
    }

    // Leer archivo db.json
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer la base de datos.');
        }

        const db = JSON.parse(data);
        const user = db.users.find(user => user.name.toLowerCase() === nombre.toLowerCase());

        if (user) {
            res.json(user);
        } else {
            res.status(404).send('Usuario no encontrado.');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
