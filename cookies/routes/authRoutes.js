import express from 'express'
import {homePage, logOut,signIn,signUp} from '../controllers/authControllers.js'
import {isAuthenticated} from '../middleware/logger.js'

const router=express.Router();

router.post("/signUp",signUp);
router.post("/signIn",signIn);
router.post("/logOut",logOut);
router.get("/home",isAuthenticated,homePage)

export default router;


