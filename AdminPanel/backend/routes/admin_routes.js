import express from 'express'
import { deleteUser, getAllUser, getCurrentUser, updateUser } from '../controllers/admin_controllers.js';

const router=express.Router();

// router.post("/add-user",addUser);
router.put("/update-user",updateUser);
router.get("/get-user",getAllUser);
router.get("/get-current-user",getCurrentUser);

router.delete("/delete-user",deleteUser);

export default router;  