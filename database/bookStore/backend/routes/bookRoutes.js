import express from 'express'
import { addBook, readBook ,updateBook,deleteBook    } from '../controllers/bookControllers.js'

const router=express.Router()

router.post("/",addBook);
router.get("/",readBook);
router.put("/:id",updateBook)
router.delete("/:id",deleteBook)

export default router;