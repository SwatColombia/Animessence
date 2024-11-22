const express = require('express');
const app = express();
const port = 4000;
const connectDB = require('./database/db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');

mongoose.connect('connectDB', {

}).then(() =>
    console.log('Conectado a MongoDB')).
catch(err => console.error('Error al conectarse a MongoDB:', err));

connectDB();

app.get('/', (req, res) => { res.send('¡Hola, mundo!'); });

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`

    );
    app.post('/data', (req, res) => {
        res.send('Datos recibidos');

    });
});