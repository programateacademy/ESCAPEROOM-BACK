import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/User';
import Role from '../models/Role';
const createPassword = require('../libs/createPassword')



export const createUser = async (req, res) =>{

    const passwordRandom = createPassword()
    const { name, username, email, roles } = req

    const newUser = new User({
        name, 
        username,
        email,
        password: await User.encryptPassword(passwordRandom)
    })



    if (roles){
        const foundRoles = await Role.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
    } else {
        const role =  await Role.findOne({name: "user"})
        newUser.roles = [role._id];
    }



    const user = {
        username: newUser.username,
        email: newUser.email,
        password: passwordRandom
    } 

    await newUser.save();

    return user
    
}


export const getUserByToken = async (req, res) => {
    try {
        const token = req.headers["x-access-token"];

        if (!token) return res.status(403).json({message: 'No se proporcionó token'})

        const decoded = jwt.verify(token, config.SECRET)
        
        req.userId = decoded.id;


        const user =  await User.findById(req.userId, {password: 0})
        console.log(req.userId)

        if (!user) return res.status(404).json({message: 'Usuario no encontrado'})
        
        res.status(200).json(user);
        
    } catch (error) {
        return res.status(401).json({message: 'No autorizado'})
    }
};


export const getUserById = async (req, res) => {
    const { userId } = req.params;

    const user = await User.findById(userId);
    res.status(200).json(user);
};




export const updateUserById = async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        {
            new: true,
        }
    );
    res.status(204).json(updatedUser);
};




export const deleteUserById = async (req, res) => {
    const { userId } = req.params;

    await User.findByIdAndDelete(userId);

    res.status(204).json({message: 'Usuario eliminado'});

};


export const allUsers = async (req, res) => {
    const user = '6283d02f50ac8e92a7bd50e5'
    const users = await User.find({roles: [user]});
    return res.json(users);

    
}


export const allAdmins = async (req, res) => {
    const admin = '6283d02f50ac8e92a7bd50e6'
    const admins = await User.find({roles: [admin]});
    return res.json(admins);
}