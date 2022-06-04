import { Schema, model } from "mongoose";

const kataAnswerSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, 
    nameUser: {
        type: String,
        required: true,
    },

    kataId: {
        type: Schema.Types.ObjectId,
        ref: 'Kata'
    },
    kataDescription: {
        type: String, 

    },
    kataSolution: {
        type: String, 

    },

    userSolution: {
        type: String,
    }
    
}, {
    timestamps: true,
    versionKey: false
});

export default model("KataAnswer", kataAnswerSchema)