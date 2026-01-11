import {blogModel} from '../models/blogModels.js'

export const createBlogs = async (req, res) => {
  try {
    const { title, content,author } = req.body;

    if (!req.file) {
      return res.json({ message: "image required" });
    }

    const blog=await blogModel.create({
      title,
      content,
      image: req.file.filename,
      author,
    });

    res.json({ message: "Blog created",blog });

  } catch (err) {
    console.log("Create Blog Error:", err);
    res.json({ message: "Blog not created" });
  }
};


export const getBlogs=async(req,res)=>{
    const blogs=await blogModel.find();
    res.json(blogs);
}

export const deleteBlog=async(req,res)=>{
  try{
      const {id}=req.params;

  await blogModel.findByIdAndDelete(id);
  res.json({message:"Blog deleted"});
  }catch(err){
    res.json({message:"Deleted Failed"});
  }
}

export const updateBlogs=async(req,res)=>{
  try{
    const {id}=req.params;
    const {title,content,author}=req.body;

    const updateData={title,content,author}
    if(req.file) updateData.image=req.file.filename;

    await blogModel.findByIdAndUpdate(id,updateData);
    res.json({message:"Blog Updated"});
  }catch(err){
     res.json({message:"Blog updation failed"});
  }
}