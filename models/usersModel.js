
const mongoose = require("../bin/mongobd")
const errorMessage = require("../util/errorMessage")
const validators = require("../util/validators")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,errorMessage.GENERAL.campo_obligatorio]
    },
    email:{
        type:String,
        require:[true,errorMessage.GENERAL.campo_obligatorio],
        unique:true,
        validate:{
            validator:function (v){
                return validators.emailValidate(v)
            },
            message:"No es un mail correcto"
        }
    },
    password:{
        type:String,
        require:[true,errorMessage.GENERAL.campo_obligatorio],
        validate:{
            validator:function (v){
                return validators.isGoodPassword(v)
            },
            message:"El password debe contener entre 6 y 12 caracteres, incluido al menos 1 miniscula y 1 numero"
        }
    }
})
userSchema.pre("save",function(next){
    this.password = bcrypt.hashSync(this.password,10)
    next()
})
userSchema.statics.findByIdAndValidate = async function(id){
    const document = await this.findById(id);
    if(!document){
        return{
            error:true,
            message:"No existe esa categoria"
        }
    }
    return document;
}
module.exports = mongoose.model("users",userSchema)