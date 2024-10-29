import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const conn=process.env.mongodb

async function connectToDatabase(){
    if (!conn){
        throw new Error('MongoDB URL is not defined')
    }
    await mongoose.connect(conn)
    console.log('Databse connection successfully')
} 

export default connectToDatabase