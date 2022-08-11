const express =  require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURL}= require('./keys')


require('./models/user')

mongoose.connect(MONGOURL,{
    useNewUrlParser:true, useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log('Connected to mongo...')
})
mongoose.connection.on('error',(err)=>{
    console.log('error connecting...',err)
})

app.listen(PORT,()=>{
    console.log("Spacebook is launching on", PORT)
})