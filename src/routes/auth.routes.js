import { Router } from "express";
const router = Router();
import * as authCtrl from "../controllers/auth.controller";
import {verifySignup, authJwt, verifySigin } from '../middlewares'

router.post('/signup',  [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted, verifySignup.checkDuplicateUsernameOrEmail], authCtrl.signUp)
router.post('/signin', [verifySigin.isLoggedIn], authCtrl.signin)



export default router;