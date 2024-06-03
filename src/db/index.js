import mongoose from "mongoose"
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB Host: ${connection.connection.host}`)
    }
    catch (error) {
        console.log("MongoDB connection Error :", error)
        process.exit(1) // learn from node js

    }
}

export default connectDB