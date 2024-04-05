const app = require("./server")
const mongoose = require("./db")
const controller = require("./contraller")




app.get("/getUsers", (req,res)=>{
    controller.getUsers(req, res)
})

app.post("/addUsers", (req, res)=>{
    controller.addUser(req, res)
})

app.get("/findUserByName", (req, res)=>{
    controller.findUsersByname(req, res)
})

app.post("/deleteUsers", (req,res)=>{
    controller.DeleteUsers(req, res)
})

app.get("/checkUsers" , (req,res)=>{
    controller.checkUsers(req, res)
})

app.post("/addPost", (req, res)=>{
    controller.addPost(req, res)
})

app.get("/getPostById", (req, res)=>{
    controller.getPostsById(req, res)
})

app.post("/addFirend", (req, res)=>{
    controller.addFirends(req, res)
})

app.get("/getfirendsById", (req, res)=>{
    controller.getfirendById(req, res)
})


app.post("/deleteFirendsById", (req, res)=>{
    controller.deleteFirendById(req, res)
})
