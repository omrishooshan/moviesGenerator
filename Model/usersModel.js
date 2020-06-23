const mongoose= require('mongoose')

var Schema = mongoose.Schema 


///NEED TO FINISH WHEN THE TIME WILL COME
let UsersSchema = new Schema({
UserName : String,
Password : String
})

module.exports=mongoose.model("users",UsersSchema)