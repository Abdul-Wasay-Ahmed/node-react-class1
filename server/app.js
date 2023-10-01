const express = require('express');
//CORS
const cors = require("cors");

const bodyParser = require('body-parser')
const app = express()
const PORT = 3060
const Users = []

//USE CORS
app.use(
    cors({
      origin: "*",
    })
  );
  

const bodyMiddleware = bodyParser.json()

app.post('/addUser' ,bodyMiddleware, (req,res)=>{
    
    const {username , phone , email} = req.body
    console.log(phone)
     Users.push({username,phone,email})
     res.send("success")
    })

    app.get('/getusers' , (req,res)=>{
        res.send(Users)
    })


app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))
