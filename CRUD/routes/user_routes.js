import express from 'express'
import  {signUp}  from '../controllers/user_controllers.js';

const router=express.Router();
router.post("/signup",signUp);

export default router;