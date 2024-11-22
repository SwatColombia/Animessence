import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});


router.post('/', (req, res) => {
    res.json({ msg: 'Respuesta de el servidor' });
});

router.route('/')
    .get


export default router