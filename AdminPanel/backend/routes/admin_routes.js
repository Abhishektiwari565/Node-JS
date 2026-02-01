import express from 'express'
import { getAllUser, updateUser } from '../controllers/admin_controllers.js';

const router=express.Router();

// router.post("/add-user",addUser);
router.post("/update-user",updateUser);
router.get("/get-user",getAllUser);

export default router;