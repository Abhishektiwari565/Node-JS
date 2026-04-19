import express from 'express'
import {addProduct,getAllProducts,deleteProducts,updateProducts} from '../controllers/product_controllers.js'
import {upload} from '../middleware/multer.js'

const router=express.Router();
router.post("/add",upload.single("image"),addProduct);
router.get("/get",getAllProducts);
router.delete("/delete/:id",deleteProducts);
router.put("/update/:id",upload.single("image"),updateProducts);

export default router;