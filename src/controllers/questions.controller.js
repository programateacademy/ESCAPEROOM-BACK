import Question from "../models/Question";

export const createQuestion = async (req, res) => {
    const { question_number, group, question, correct_answer, incorrect_answers, tips} = req.body;

    try {
        const newQuestion = new Question({
            question_number,
            group,
            question,
            correct_answer,
            incorrect_answers,
            tips,
        });
    
        const questionSaved = await newQuestion.save();
    
        res.status(201).json(questionSaved);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

export const getQuestions = async (req, res) => {
    const questions = await Question.find();
    return res.json(questions);

};

export const getQuestionById = async (req, res) => {
    const { questionId } = req.params;
    const question = await Question.findById(questionId);
    res.status(200).json(question);

};

export const updateQuestionById = async (req, res) => {
    const updatedQuestion = await Question.findByIdAndUpdate(
        req.params.questionId,
        req.body,
        {
            new: true,
        }
    )
    res.status(204).json(updatedQuestion);
}

export const deleteQuestionById = async (req, res) => {
    const { questionId } = req.params;

    await Question.findByIdAndDelete(questionId);

    res.status(204).json();

};