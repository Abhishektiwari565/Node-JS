import express from 'express'
import multer from 'multer'
import {addMovie,getMovies} from '../controllers/movieControllers'
import path from 'path'
import {fileURLToPath} from 'url'

const router=express.Router();

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const uploadPath=path.join(__dirname,"uploads")

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,uploadPath)
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
    
})

const upload=multer({storage:storage});

router.post("/",upload.single("image"),addMovie);
router.get("/",getMovies);

export default router;