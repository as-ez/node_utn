
const mongoose = require("../bin/mongobd")
const errorMessage = require("../util/errorMessage")
const categoriaSchema = new mongoose.Schema({
    nombre:{
        type:String,
        require:[true,errorMessage.GENERAL.campo_obligatorio]
    }
})
categoriaSchema.statics.findByIdAndValidate = async function(id){
    const document = await this.findById(id);
    if(!document){
        return{
            error:true,
            message:"No existe esa categoria"
        }
    }
    return document;
}
module.exports = mongoose.model("categorias",categoriaSchema)