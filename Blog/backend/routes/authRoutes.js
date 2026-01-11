import {IsUserExists,isAuthenticated, userNotSignIn} from '../middleware/authMiddleware.js'
import express from 'express'
import {signin,signout,signup} from '../controllers/authControllers.js'
import { verifyOtp } from '../controllers/otpControllers.js';
import { createBlogs, deleteBlogs, getBlogs, updateBlogs } from '../controllers/blogControllers.js';
import {upload} from '../config/multer.js'

const router=express.Router();

router.post("/signup",IsUserExists,signup);
router.post("/signin",signin);
router.post("/verify",verifyOtp);
router.post("/createBlogs",isAuthenticated,upload.single("image"),createBlogs);

router.get("/getBlogs",isAuthenticated,getBlogs);
router.get("/signout",userNotSignIn,signout);

router.delete("/deleteBlogs/:id",isAuthenticated,deleteBlogs);
router.put("/updateBlogs/:id",isAuthenticated, upload.single("image"),updateBlogs);


export default router;