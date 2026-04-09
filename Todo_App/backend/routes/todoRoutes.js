import express from 'express'
import {getTodo,addTodo,deleteTodo} from '../controllers/todoControllers.js'
import {authMiddleware} from '../middleware/authMiddleware.js'

const router=express.Router();
router.get("/addtodo",authMiddleware,addTodo);
router.get("/gettodo",authMiddleware,getTodo);
router.get("/deletetodo/:id",authMiddleware,deleteTodo);

export default router;