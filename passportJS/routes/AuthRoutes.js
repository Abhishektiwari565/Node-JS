import express from 'express'
import passport from 'passport'
import {isLogin} from '../middleware/AuthMiddleware.js'
import {signin,signout,signup,home} from '../controllers/AuthControllers.js'

const router=express.Router();

router.post("/api/signup",signup);
router.post("/api/signin",passport.authenticate("local"),signin);
router.get("/api/signout",signout);

router.get("/api/home",isLogin,home);

export default router;



