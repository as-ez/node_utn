
const mongoose = require("../bin/mongobd")
const errorMessage = require("../util/errorMessage")

const productosSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio]
    },
    categoria:{
        type:mongoose.Schema.ObjectId,
        ref:"categorias"
    },
    precio:{
        type:Number,
        min:1,
        required:[true,errorMessage.GENERAL.minlength]
    },
    codigo:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio]
    },
    descripcion:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio]
    },
    destacado:Boolean
})
productosSchema.virtual("price_currency").get(function(){
    return "$ "+this.precio
})
productosSchema.statics.findByIdAndValidate = async function(id){
    const document = await this.findById(id).populate("categoria");
    if(!document){
        return{
            error:true,
            message:"No existe ese producto"
        }
    }
    return document;
}
productosSchema.set("toJSON",{virtuals:true})
module.exports = mongoose.model("productos",productosSchema)