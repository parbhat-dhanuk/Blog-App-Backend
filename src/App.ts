import express from "express"
import dotenv from "dotenv"
import connectToDatabase from "./database/database"

const app=express()
dotenv.config()
connectToDatabase()
const port = process.env.port
app.use(express.json())
connectToDatabase()



app.listen(port,()=>{
    console.log(`Running in port:${port}`)
})
