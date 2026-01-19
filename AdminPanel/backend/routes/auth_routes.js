import express from 'express'
import { checkLoginStatus, signout ,  verifyOtp,signin,signup } from '../controllers/auth_controllers.js';

const router=express.Router();

router.post("/signup",signup);
router.post("/signin",signin);
router.post("/verifyOtp",verifyOtp);

router.get("checkLoginStatus",checkLoginStatus)
router.get("/signout",signout);

export default router;