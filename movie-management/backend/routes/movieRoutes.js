


import express from 'express'
import multer from 'multer'
import { addMovie, getMovies,deleteMovies,updateMovies } from '../controllers/movieControllers.js'
import path from 'path'
import {uploadPath} from '../server.js'

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage });

router.post("/", upload.single("moviePoster"), addMovie);
router.get("/", getMovies);
router.delete("/:id",deleteMovies);
router.put("/:id",upload.single("moviePoster"),updateMovies);

export default router;
