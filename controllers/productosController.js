const categoriasModel = require("../models/categoriasModel")
const productosModel = require("../models/productosModel")
module.exports={
    getAll: async function (req, res, next){
        try {
            let queryFind = {}
            if(req.query.buscar){
                queryFind = {nombre:{$regex:".*"+req.query.buscar+".*",$options:"i"}}
            }
            const productos = await productosModel.find(queryFind).populate("categoria")
            res.status(200).json(productos)
            console.log(productos)
        }catch(e){
            if(e.message){
                res.status(500).json({status:"error",mensaje:e.message})
                return
            }
            next(e)
        }
    },
    getDestacado: async function (req, res, next){
        try {
            const productos = await productosModel.find({destacado:true}).populate("categoria")
            res.status(200).json(productos)
            console.log(productos)
        }catch(e){
            if(e.message){
                res.status(500).json({status:"error",mensaje:e.message})
                return
            }
            next(e)
        }
    },
    getById: async function (req, res, next){
        try {
            const productos = await productosModel.findByIdAndValidate(req.params.id)
            res.status(200).json(productos)
            console.log(productos)
        }catch(e){
            if(e.message){
                res.status(500).json({status:"error",mensaje:e.message})
                return
            }
            next(e)
        }
    },
    create: async function(req, res, next){
        console.log(req.body)
        try {
            const categoria = await categoriasModel.findByIdAndValidate(req.body.categoria)
            if(categoria.error){
                res.json(categoria)
                return
            }
            const producto = new productosModel({
                name:req.body.name,
                categoria:req.body.categoria,
                precio:req.body.precio,
                codigo:req.body.codigo,
                descripcion:req.body.descripcion,
                destacado:req.body.destacado
            })
            const documento = await producto.save()
            console.log(documento)
            res.status(201).json(documento)
        } catch(e){
            if(e.message){
                res.status(500).json({status:"error",mensaje:e.message})
                return
            }
            next(e)
        }
    },
    update: async function(req, res, next){
        try {
            const producto = await productosModel.updateOne({_id:req.params.id}, req.body)
            res.json(producto)
            console.log(req.params)
            //console.log(req.body)
        } catch(e){
            if(e.message){
                res.status(500).json({status:"error",mensaje:e.message})
                return
            }
            next(e)
        }
        
    },
    delete: async function(req, res, next){
        try {
            console.log(req.params)
            const producto = await productosModel.deleteOne({_id:req.params.id})
            res.json(producto)
        }catch(e){
            if(e.message){
                res.status(500).json({status:"error",mensaje:e.message})
                return
            }
            next(e)
        }
    }
}