import { ROLES } from "../models/Role";
import User from '../models/User'


export const checkDuplicateUsernameOrEmail = async (req, res, next) => {

    try {
        const user = await User.findOne({ username: req.body.username });
        if (user)
            return res.status(400).json({ message: "El usuario ya existe" });
        const email = await User.findOne({ email: req.body.email });
        if (email)
            return res.status(400).json({ message: "El correo ya existe" });
        next();
    } catch (error) {
        res.status(500).json({ message: error });
    }
};





export const checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {

        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
            return res.status(400).json({
                message: `Role ${req.body.roles[i]} no existe`,
            });
            }
        }
        }
    
        next();
};


export const validateCreateuser = async (req, res,) => {
    if(req.username && req.email) {
        const user = await User.findOne({
            $or: [
                { username: req.username },
                { email: req.email }
            ]
        });
        
        if(user) {
            return    'Username y email ya existen';
        }
    }
}