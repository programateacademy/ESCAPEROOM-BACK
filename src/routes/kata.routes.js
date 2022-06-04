import { Router } from "express";
const router = Router();

import * as katasCtrl from "../controllers/katas.controller";

import { authJwt } from "../middlewares";



router.get("/", [authJwt.verifyToken, authJwt.isAdmin], katasCtrl.getKatas)

router.get("/:kataId", [authJwt.verifyToken], katasCtrl.getKataById);

router.post("/",  [authJwt.verifyToken, authJwt.isAdmin],  katasCtrl.createKata);

router.put("/:kataId", [authJwt.verifyToken, authJwt.isAdmin], katasCtrl.updateKataById);

router.delete("/:kataId", [authJwt.verifyToken, authJwt.isAdmin], katasCtrl.deleteKataById);


export default router;