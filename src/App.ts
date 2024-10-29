import express from "express"
import * as dotenv from "dotenv"


const app=express()
dotenv.config()
const port = process.env.port
app.use(express.json())



app.listen(port,()=>{
    console.log(`Running in port:${port}`)
})
