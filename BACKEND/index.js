import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usuarioRoutes from './routes/usuarioRoutes.js'
import conectarDB from './database/db.js';

dotenv.config();

conectarDB();


const app = express();
const port = process.env.PORT || 4000;



app.use(express.json());

app.get('/', usuarioRoutes)

app.post('/', usuarioRoutes)



//const bodyParser = require('body-parser');
//const mongoose = require('mongoose');


//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));


/* mongoose.connect('connectDB', {

}).then(() =>
    console.log('Conectado a MongoDB')).
catch(err => console.error('Error al conectarse a MongoDB:', err));
 */
//connectDB();
// routing 

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`

    );
    app.post('/data', (req, res) => {
        res.send('Datos recibidos');

    });
});