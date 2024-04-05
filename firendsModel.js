const mongoose = require("mongoose")
const Schema = mongoose.Schema

const FirendsSchema = new Schema({
    id:String,
    firend_N:String,
    firends_id:String
})

const Firends = mongoose.model("firends", FirendsSchema)

module.exports = Firends