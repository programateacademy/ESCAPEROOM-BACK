import { Router } from "express";
const router = Router();

import * as answerCtrl from "../controllers/answers.controller"

router.get('/', answerCtrl.getAnswer)

router.post('/createanswer/:questionId/:userId', answerCtrl.createAnswer)

module.exports = router;