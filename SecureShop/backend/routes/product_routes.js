import express from 'express'
import {addProduct,getAllProducts,deleteProducts,updateProducts} from '../controllers/product_controllers.js'

const router=express.Router();
router.post("/add",addProduct);
router.post("/get",getAllProducts);
router.post("/delete",deleteProducts);
router.post("/update",updateProducts);

export default router;