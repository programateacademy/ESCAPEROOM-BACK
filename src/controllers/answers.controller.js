import Question from "../models/Question";
import User from "../models/User";
import Answer from "../models/Answer";

export const createAnswer = async (req, res) => {
    const {  user_answer, use_tip, use_answer} = req.body 
    const { questionId, userId } = req.params;

    const question = await Question.findById(questionId);
    const user = await User.findById(userId);
    
    try {
        const newAnswer = new Answer({
            question_id: question._id,
            question: question.question,
            correct_answer: question.correct_answer,
            user_answer,
            use_tip,
            use_answer,
            user_id: user._id,
            user: user.name 
        });

        const answerSaved = await newAnswer.save();

        res.status(201).json(answerSaved);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};


export const getAnswer = async (req, res) => {
    const answer = await Answer.find();
    return res.json(answer);
};