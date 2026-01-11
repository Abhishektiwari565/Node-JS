
import {blogModel} from "../models/blogModels.js";
import fs from "fs";
import path from "path";

/* ================= CREATE BLOG ================= */
export const createBlogs = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const image = req.file ? req.file.filename : null;

    const newBlog = new blogModel({
      title,
      content,
      author,
      image,
    });

    await newBlog.save();
    res.status(201).json({ message: "Blog created successfully", blog: newBlog });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

/* ================= GET BLOGS ================= */
export const getBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find().sort({ createdAt: -1 }); // latest first
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

/* ================= DELETE BLOG ================= */
export const deleteBlogs = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    // Delete image if exists
    if (blog.image) {
      const filePath = path.join(process.cwd(), "uploads", blog.image);
      if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => {
          if (err) console.log("Error deleting image:", err);
          else console.log("Image deleted:", blog.image);
        });
      } else {
        console.log("Image file not found, skipping deletion:", blog.image);
      }
    }

    // Delete blog from DB
    await blog.deleteOne();
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

/* ================= UPDATE BLOG ================= */
export const updateBlogs = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const { title, content, author } = req.body;

    // If new image uploaded, delete old image
    if (req.file && blog.image) {
      const oldImagePath = path.join(process.cwd(), "uploads", blog.image);
      if (fs.existsSync(oldImagePath)) {
        fs.unlink(oldImagePath, (err) => {
          if (err) console.log("Error deleting old image:", err);
          else console.log("Old image deleted:", blog.image);
        });
      } else {
        console.log("Old image file not found, skipping deletion:", blog.image);
      }
      blog.image = req.file.filename; // set new image
    }

    // Update other fields
    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.author = author || blog.author;

    await blog.save();
    res.json({ message: "Blog updated successfully", blog });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
