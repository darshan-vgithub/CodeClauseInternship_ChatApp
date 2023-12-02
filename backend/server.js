const express=require("express")
const dotenv=require("dotenv")
const { chats } = require("./data/data")

const app=express()
dotenv.config()

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
const PORT=process.env.PORT
app.listen(PORT,console.log(`The Server is Running on port ${PORT}`))