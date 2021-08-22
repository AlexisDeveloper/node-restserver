const { response } = require('express');

  const usuariosGet = (req = request, res = response) =>{
    const {q,nombre='No name',apiKey,page=1} = req.query;
    res.json({
        msg: 'Get API desde el controlador',
        q,
        nombre,
        apiKey,
        page
      });
  }

  const usuariosPut = (req, res=response) =>{
    const { id } = req.params;
      res.json({
        msg: 'Put Usuarios desde el controlador',
        id
    })
  }

  const usuariosPost = (req, res=response) =>{
      const body = req.body;
      res.json({
        msg: 'Post Usuarios desde el controlador 1',
        body
      })
}

const usuariosPatch = (req, res=response) =>{
    res.json({
      msg: 'Patch Usuarios desde el controlador'
  })
}

const usuariosDelete = (req, res=response) =>{
    res.json({
      msg: 'Delete Usuarios desde el controlador'
  })
}

  module.exports={
      usuariosGet,
      usuariosPut,
      usuariosPost,
      usuariosDelete,
      usuariosPatch
  }