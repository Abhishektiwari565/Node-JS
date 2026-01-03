import express from 'express'
import {signup,signin,home} from '../controllers/authControllers.js'
import { isAuthenticated } from '../middleware/authMiddlewares.js';

const router=express.Router();

router.post("/signup",signup);
router.post("/signin",signin);
router.get("/home",isAuthenticated,home);

export default router;