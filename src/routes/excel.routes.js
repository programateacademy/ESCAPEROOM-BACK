import { Router } from "express";
const router = Router();
import * as excelCtrl from "../controllers/excel.controller";
import { authJwt } from "../middlewares";




router.post('/', [authJwt.verifyToken, authJwt.isAdmin], excelCtrl.saveDataExcel)


export default router;