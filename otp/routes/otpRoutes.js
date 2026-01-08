import express from 'express'
import { verifyOtp,sendOtp } from '../controllers/otpControllers.js';

const router=express.Router();

router.post("/send",sendOtp);
router.post("/verify",verifyOtp);

export default router;