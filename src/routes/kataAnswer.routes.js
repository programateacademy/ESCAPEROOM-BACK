import { Router } from "express";
const router = Router();

import * as kataAnswerCtrl from "../controllers/kataAnswer.controller"

router.get('/', kataAnswerCtrl.getKataAnswers)

router.post('/',kataAnswerCtrl.createKataAnswer)

module.exports = router;

