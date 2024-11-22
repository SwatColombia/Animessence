import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js'


//import connectDB from './database/db.js';


const app = express();


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

const port = 4000;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`

    );
    app.post('/data', (req, res) => {
        res.send('Datos recibidos');

    });
});