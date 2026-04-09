import express from 'express'
import {getTodo,addTodo,deleteTodo} from '../controllers/todoControllers.js'

const router=express.Router();
router.get("/addtodo",addTodo);
router.get("/gettodo",getTodo);
router.get("/deletetodo/:id",deleteTodo);

export default router;