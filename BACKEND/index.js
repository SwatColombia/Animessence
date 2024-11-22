import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usuarioRoutes from './routes/usuarioRoutes.js'
import connectDB from './database/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado a la base de datos MongoDB');
    } catch (err) {
        console.error('Error conectándose a la base de datos MongoDB:', err);
        process.exit(1);
    }
};
connectDB();

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