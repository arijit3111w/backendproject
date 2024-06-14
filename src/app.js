import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true, 
}))

app.use(express.json({
    limit: "16kb"
})) // configuration settings to handle json through express 
app.use(express.urlencoded({
    extended:true,
    limit: "16kb",
}))  // extend:true is for nested object handling 

app.use(express.static("public")) // express.static is a built-in middleware function in Express.js 
// that serves static files. It is used to serve files such as images, CSS files, and JavaScript files.

app.use(cookieParser())



// routes import 

import userRouter from "./routes/user.routes.js"


// routes declaration

app.use("/api/v1/users",userRouter)  // user.router.js file

// http://localhost:8000/api/v1/users/register

export {app}


