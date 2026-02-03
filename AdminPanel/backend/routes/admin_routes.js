import express from 'express'
import { getAllUser, getCurrentUser, updateUser } from '../controllers/admin_controllers.js';

const router=express.Router();

// router.post("/add-user",addUser);
router.post("/update-user",updateUser);
router.get("/get-user",getAllUser);
router.get("/get-current-user",getCurrentUser);

export default router;