const express=require("express")
const dotenv=require("dotenv")
const { chats } = require("./data/data")
const connectDB = require("./config/db")
const colors= require("colors")



dotenv.config()
connectDB()
const app=express()

app.get("/",(req,res)=>{
    res.send("API is Running successfully")
})

app.get("/api/chat",(req,res)=>{
    res.send(chats)
})

app.get("/api/chat/:id",(req,res)=>{
    const SingleChat=chats.find((c)=>c._id===req.params.id)
    res.send(SingleChat)
})


const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`The Server is Running on port ${PORT}`.yellow.bold))