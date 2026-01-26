import express from 'express'
import { checkLoginStatus, signout ,  verifyOtp,signin,signup, changePassword, changeForgotPassword, forgotPassword } from '../controllers/auth_controllers.js';

const router=express.Router();

router.post("/signup",signup);
router.post("/signin",signin);
router.post("/verifyOtp",verifyOtp);
router.post("/changePassword",changePassword)
router.post("/forgotPassword",forgotPassword)
router.post("/changeForgotPassword",changeForgotPassword)


router.get("/checkLoginStatus",checkLoginStatus)
router.get("/signout",signout);

export default router;