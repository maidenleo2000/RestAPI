const {Router} = require('express');

const {usuariosGet, 
       usuariosPut, 
       usuariosPost, 
       usuaiosDelete, 
       usuariosPatch} = require('../controllers/usuarios.controllers')

const router = Router();


router.get('/', usuariosGet );

//el :id es para indicar que quiero capturar eso que sigue al / en el URL
router.put('/:id', usuariosPut ); 

router.post('/', usuariosPost );

router.delete('/', usuaiosDelete );

router.patch('/', usuariosPatch );









module.exports = router;