import express from 'express'
import { addBook, readBook     } from '../controllers/bookController.js'

const router=express.Router()

router.post("/",addBook);
router.get("/",readBook);

export default router;