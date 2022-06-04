import { Schema, model } from "mongoose";



const kataSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    baseKata: {
        type: String,
        required: true,
    },
    solution: {
        type: String,
        required: true,
    },
    group: {
        type: String
    },
    creator_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    creator_name: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},  {
    timestamps: true,
    versionKey: false,
});


export default model("Kata", kataSchema);