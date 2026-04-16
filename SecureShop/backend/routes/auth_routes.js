import express from 'express'
import { Login, register, verifyOtp } from '../controllers/auth_contollers.js';

const router=express.Router();

router.post("/register",register);
router.post("/login",Login);
router.post("/verifyOtp",verifyOtp);

export default router;