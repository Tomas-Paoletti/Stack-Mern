import mongoose from "mongoose";

const {Schema } = mongoose

const userSchema= new Schema({
    _id: {type: String, _id:false}
    name :{type: String, require: true, minLength: 2, maxLength:20},
    surname :{type: String, require: true, minLength: 4, maxLength:50},
    email: {type : String, require:true,unique:true} ,
    password: {ype:String, require : true}
})

const userModel = model("User", userSchema)

export default userModel