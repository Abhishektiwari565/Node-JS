import express from 'express'
import {addProduct,getAllProducts,deleteProducts,updateProducts} from '../controllers/product_controllers.js'
import {upload} from '../middleware/multer.js'

const router=express.Router();
router.post("/add",upload.single("image"),addProduct);
router.post("/get",getAllProducts);
router.post("/delete",deleteProducts);
router.post("/update",upload.single("image"),updateProducts);

export default router;