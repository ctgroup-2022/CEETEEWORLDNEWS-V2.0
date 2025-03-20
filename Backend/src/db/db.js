import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Connected to the database ${connectionInstance.connection.name}`)
        console.log(`Connected to the database ${connectionInstance.connection.host}`)
     
    }
    catch (error) {
        console.error("ERROR: Could not connect to the database", error)
        process.exit(1)
    }
    
}


export default connectDB