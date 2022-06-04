import { Router } from "express";
const router = Router();

import * as userCtrl from '../controllers/user.controller'

import {authJwt, verifySignup} from '../middlewares'

router.get('/getuser', [authJwt.verifyToken], userCtrl.getUserByToken)

router.get('/allusers', [authJwt.verifyToken, authJwt.isAdmin], userCtrl.allUsers)

router.get('/alladmins', [authJwt.verifyToken, authJwt.isAdmin], userCtrl.allAdmins)

router.get('/:userId', [authJwt.verifyToken, authJwt.isAdmin ], userCtrl.getUserById);

router.put('/:userId', [authJwt.verifyToken, authJwt.isAdmin ], userCtrl.updateUserById);

router.delete("/:userId", [authJwt.verifyToken, authJwt.isAdmin], userCtrl.deleteUserById);


// router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted], userCtrl.createUser)

export default router;
