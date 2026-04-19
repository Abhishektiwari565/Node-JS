import {productModel} from '../models/product_models.js'

export const addProduct=async(req,res)=>{
    try{
        const {name,price,description,category}=req.body;
        const image = req.file ? req.file.filename : null;
        const product=await productModel.create({name,price,description,category,image});
        res.json({message:"product added successfully",product});
    }catch(err){
        res.json({message:"Failed to add product",error:err.message});
    }
}

export const getAllProducts=async(req,res)=>{
    try{
        const products=await productModel.find();
        res.json({message:"products fetched successsfully",products});
    }catch(err){
        res.json({message:"Failed to get products",error:err.message});
    }
}

export const deleteProducts=async(req,res)=>{
    try{
        const {id}=req.params;
        await productModel.findByIdAndDelete(id);
        res.json({message:"product deleted successfully"});
    }catch(err){
        res.json({message:"Failed to delete product",error:err.message});
    }
}

export const updateProducts = async (req, res) => {
  try {
    const { id } = req.params;

    const updateData = {
      ...req.body
    };

    // 👉 if new image uploaded
    if (req.file) {
      updateData.image = req.file.filename;
    }

    await productModel.findByIdAndUpdate(id, updateData);

    res.json({ message: "product updated successfully" });

  } catch (err) {
    res.json({ message: "Failed to update product", error: err.message });
  }
};