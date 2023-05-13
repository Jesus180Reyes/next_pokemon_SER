import mongoose, { Schema } from "mongoose";

 const User = new Schema({

    name: {
        type: String,
        required: true,
    },
    lastName: {
        type:String,
        required: true,
    },
    password: {
        type: String,
        required: true,

    },
    createdAt:{
        type:Date,
        default: Date.now(),
    },
    updatedAt:{
        type:Date,
        default: Date.now(),
    },
    
});
export const  user = mongoose.model('user', User);

