import express from "express";
const router = express.Router();
import { registrar,perfil, login } from "../controllers/AnimadorController.js";



router.post('/registrar', registrar) ;

router.get('/perfil', perfil) ;


router.post('/login', login ) 
   


/* router.route('/')
    .get(function(req, res) {
        res.json({ msg: ' hola mundo en express' })
    })
    .post(function(req, res) {
        res.json({ msg: 'Datos emviados' })
    }) */


export default router;
