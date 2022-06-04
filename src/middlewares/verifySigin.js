import User from '../models/User'


export const isLoggedIn = async (req, res, next) => {
    
    try {
        const userFound = await User.findOne({email: req.body.email}).populate("roles")
        
        if (!userFound) return res.status(400).json({message: 'Usuario no encontrado'})
        
        if (userFound.isLoggedIn) return res.status(401).json({token: null, message: 'No puedes ingresar por segunda vez'})

        next();

    } catch (error) {
        res.status(500).json({ message: 'error de metodo' });
    }
};