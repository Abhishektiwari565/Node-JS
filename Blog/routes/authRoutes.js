import {IsUserExists,isAuthenticated} from '../middleware/authMiddleware.js'
import express from 'express'
import {signin,signout,signup,blogPage} from '../controllers/authControllers.js'

const router=express.Router();

router.post("/signup",IsUserExists,signup);
router.post("/signin",signin);
router.get("/signout",signout);
router.get("/blog",isAuthenticated,blogPage);

export default router;