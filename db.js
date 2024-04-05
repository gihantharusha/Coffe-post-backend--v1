const mongoose = require("mongoose")

const uri = "mongodb+srv://tharushagihan:tharushagihan1122@cluster0.a0lz6t4.mongodb.net/"

const connect = async ()=>{
    try{
        await mongoose.connect(uri)
        console.log("Connect")
    }catch{
        (err)=>{
            console.log(err)
        }
    }
}

connect()