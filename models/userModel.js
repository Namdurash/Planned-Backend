import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a name'
    },
    age: {
        type: Number,
        required: 'Enter an age',
        min: 8,
        max: 120
    }
})