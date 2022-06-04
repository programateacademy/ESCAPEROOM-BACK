
import Kata from "../models/Kata";
import User from "../models/User";
import KataAnswer from "../models/KataAnswer";



export const createKataAnswer = async (req, res) => {

    const { userId, kataId, userSolution} = req.body;

    const userFound = await User.findOne({_id: userId})
    const kataFound = await Kata.findOne({_id: kataId})


    try {
        const newKataAnswer = new KataAnswer({
            userId,
            nameUser: userFound.name,
            kataId,
            kataName: kataFound.name,
            kataDescription: kataFound.description,
            kataSolution: kataFound.solution,
            userSolution,
        });

        const answerSaved = await newKataAnswer.save();

        res.status(201).json(answerSaved);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};


export const getKataAnswers = async (req, res) => {
    const kataAnswers = await KataAnswer.find();
    return res.json(kataAnswers);
};
