import 'dotenv/config';
import mongoose from "mongoose";

export const connection = async ()=>{
    try{
        const moongoUri = process.env.MONGO_URI as string;
        await mongoose.connect(moongoUri);
        console.log("database connected");
    }
    catch(e){
        console.log(`MongoDB connection failed ${e}`);
    }
}