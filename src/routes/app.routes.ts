import { Router } from "express";
import { userCtrl } from "../controllers/user.controller";
import { rsaCtrl } from "../controllers/rsa.controller";

export const router = Router();


//User Routes
router.post("/signup", userCtrl.createUser);
router.post("/login", userCtrl.loginUser);

router.get("/generateKey", rsaCtrl.generatePrivateKey);
router.post("/login", userCtrl.loginUser);


