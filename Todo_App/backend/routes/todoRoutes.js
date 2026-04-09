import express from 'express'
import {getTodo,addTodo,deleteTodo} from '../controllers/todoControllers.js'
import {authMiddleware} from '../middleware/authMiddleware.js'

const router=express.Router();
router.post("/addtodo",authMiddleware,addTodo);
router.get("/gettodo",authMiddleware,getTodo);
router.delete("/deletetodo/:id",authMiddleware,deleteTodo);

export default router;