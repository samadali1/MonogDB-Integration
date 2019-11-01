const express = require('express')
const app = express();
const db = require('./config/db');
var cors = require('cors')
app.use(cors)

db.connection.once('open',()=>{
    console.log("Database Connected Successfully!")
}).on("error", error =>{
    console.log("Database Connection Failed!")
})

app.listen(3003,function(){
    console.log("Server Started Succesfully!")
})

// app.post("/getposts", function(req,res){
//     console.log("hello friends")
//     res.send({users:[],message:"Hey"})
// })

app.use('/',require('./routes/index.js'))
