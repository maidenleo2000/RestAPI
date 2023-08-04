const {response} = require('express')


const usuariosGet = (req = request, res = response) => {

    // const query = req.query;
    const {q, nombre = 'No name', apikey, page = 1, limit} = req.query;
    
    // res.send('Hola Mundo')
    // res.status(403).json({
    res.json({
        // ok:true, //opcional, no es necesario el ok
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    }) //?Para devolver los datos en formato json que es lo mas comun
}

const usuariosPut = (req, res = response) => {   
    
    const id = req.params.id;
    
    res.json({
        msg: 'put API - controlador',
        id
    })
}

const usuariosPost = (req, res = response) => {  
    
    const body = req.body; //esto es lo que manda el usuario que es el request 
    const {nombre, edad} = req.body; 
    
    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    })
}

const usuaiosDelete = (req, res = response) => {            
    res.json({
        msg: 'delete API - controlador'
    })
}

const usuariosPatch = (req, res = response) => {            
    res.json({
        msg: 'patch API - controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuaiosDelete,
    usuariosPatch
}