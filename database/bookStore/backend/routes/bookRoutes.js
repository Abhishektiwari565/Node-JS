import express from 'express'
import { addBook, readBook     } from '../controllers/bookControllers.js'

const router=express.Router()

router.post("/",addBook);
router.get("/",readBook);

export default router;