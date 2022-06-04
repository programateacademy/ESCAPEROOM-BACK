import { Schema, model } from "mongoose";

const answerSchema = new Schema({
    question_id: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
    },
    question: { type: String

    },
    correct_answer: String,
    user_answer: Boolean,
    use_tip: Boolean,
    use_answer: Boolean,
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    user: { type: String
    },
}, {
    timestamps: true,
    versionKey: false
});

export default model("Answer", answerSchema)