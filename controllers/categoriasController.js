const categoriaModel = require("../models/categoriasModel")
module.exports={
    getAll:async function(req, res, next){
        try{
            const categorias = await categoriaModel.find()
            res.json(categorias)
        }catch(e){
            next(e)
        }
    },
    create:async function(req, res, next){
        try{
            const categoria = new categoriaModel({nombre:req.body.nombre})
            const response = await categoria.save()
            res.json(response)
        }catch(e){
            next(e)
        }
    }
}