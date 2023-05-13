import mongoose from "mongoose";
import {config} from 'dotenv';
config();
 const connectDB = async() => {
    try {
         mongoose.connect(process.env.MONGODB_CNN!);
        console.log("Base de datos Online");
    } catch (error) {
        console.error("Error al conectar con DB ", error);
        process.exit(1);
    }

}

export default connectDB;