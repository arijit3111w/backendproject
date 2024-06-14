// require ('dotenv').config({path: './.env'});

import dotenv from"dotenv"
import express from "express"
import connectDB from "./db/index.js"; 
import {app} from "./app.js"

dotenv.config({path: './.env'})

connectDB()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Express server is running on port ${process.env.PORT}`)
    })
})
.catch( (err)=>{
    console.log("MongoDB connection failed ! :", err)
}) // when an asynchronous method is called it returns a promise so use then and catch 










/*const app = express()
// using IIFE 
;( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Express communication Error :",error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`Express server is running on port ${process.env.PORT}`)
        })
    }
    catch (error){
        console.error("Error :", error)
        throw err
    }
})()*/