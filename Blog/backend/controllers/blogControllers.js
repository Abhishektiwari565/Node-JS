import {blogModel} from '../models/blogModels.js'

export const createBlogs = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!req.file) {
      return res.json({ message: "image required" });
    }

    const blog=await blogModel.create({
      title,
      content,
      image: req.file.filename,
      author: req.cookies.auth ? "logged-user" : "anonymous"
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