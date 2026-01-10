import {IsUserExists,isAuthenticated, userNotSignIn} from '../middleware/authMiddleware.js'
import express from 'express'
import {signin,signout,signup,blogPage} from '../controllers/authControllers.js'
import { verifyOtp } from '../controllers/otpControllers.js';

const router=express.Router();

router.post("/signup",IsUserExists,signup);
router.post("/signin",signin);
router.post("/verify",verifyOtp)

router.get("/signout",userNotSignIn,signout);
router.get("/blog",isAuthenticated,blogPage);

export default router;