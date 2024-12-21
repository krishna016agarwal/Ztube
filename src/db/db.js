import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb=async()=>{
   
    
    try {
        await mongoose.connect(`${process.env.MONGODB}/${DB_NAME}`)
        .then(()=>{
           console.log("MONGODB CONNECTED");
            
       })
    } catch (error) {
        console.log("MONGODB ERROR",error);
        
    }
}

export default connectDb;