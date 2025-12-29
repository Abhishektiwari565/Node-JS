import express from 'express'
import {logOut,login,signUp} from '../controllers/authControllers.js'

const router=express.Router();

router.post("/signUp",signUp);
router.post("/login",login);
router.post("/logOut",logOut);

export default router;


