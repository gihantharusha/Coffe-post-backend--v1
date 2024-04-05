const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Postschema = new Schema({
    id:String,
    post:String
})

const Post =  mongoose.model("Post", Postschema)

module.exports = Post