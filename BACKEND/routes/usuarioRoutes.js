import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: '¡Hola, mundo!' });
});


router.post('/', (req, res) => {
    res.json({ msg: 'Respuesta de el servidor' });
});

/* router.route('/')
    .get(function(req, res) {
        res.json({ msg: ' hola mundo en express' })
    })
    .post(function(req, res) {
        res.json({ msg: 'Datos emviados' })
    }) */


export default router