import multer from 'multer'
import {fileURLToPath} from 'url'
import path from 'path'
import fs from 'fs'

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const uploadPath=path.join(__dirname,"..","uploads");

if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,uploadPath);
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname));
    }
})

export const upload = multer({storage:storage});

export default upload;
