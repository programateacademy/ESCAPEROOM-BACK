import { Router } from "express";
const router = Router();

import * as questionsCtrl from '../controllers/questions.controller'

import { authJwt } from '../middlewares'

router.get('/', [authJwt.verifyToken], questionsCtrl.getQuestions)

router.get('/:questionId', [authJwt.verifyToken], questionsCtrl.getQuestionById)

router.put('/:questionId', [authJwt.verifyToken, authJwt.isAdmin], questionsCtrl.updateQuestionById)

router.delete('/:questionId', [authJwt.verifyToken, authJwt.isAdmin], questionsCtrl.deleteQuestionById)

router.post('/createquestion', [authJwt.verifyToken, authJwt.isAdmin], questionsCtrl.createQuestion)



module.exports = router;
