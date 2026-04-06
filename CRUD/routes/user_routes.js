import express from 'express'
import  {signUp,signIn,getAllUsers,updateUser,deleteUser}  from '../controllers/user_controllers.js';

const router=express.Router();
router.post("/signup",signUp);
router.post("/signin",signIn);
router.get("/getUsers",getAllUsers);
router.put("/update/:id",updateUser);
router.delete("/delete/:id",deleteUser);
export default router;