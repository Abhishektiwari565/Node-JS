import {userCollection} from "../models/user_models.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const signUp=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const hashed=await bcrypt.hash(password,12)
        const user = await userCollection.create({email,password:hashed});
        res.json({message:"User registered successfully",  user: {
        id: user._id,
        email: user.email,
      },});
    }catch(err){
        res.json({message:err.message})
    }
}

export const signIn=async(req,res)=>{
   try{
     const {email,password}=req.body;
    const user=await userCollection.findOne({email});

    if(!user){
        return res.json({message:"user not found !"});
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.json({message:"password is incorrect!!"});
    }

    const token=jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    );
    res.json({message:"login successfully",token,user:{
        id:user._id,
        email:user.email
    }});
   }catch(err){
    res.json(err.message);
   }
}

export const getAllUsers=async(req,res)=>{
    try{
        const user=await userCollection.find();
        res.json({messsage:"all users",user});
    }catch(err){
        res.json({message:err.message});
    }
}

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, password } = req.body;

    let updateData = {};

    if (email) {
      updateData.email = email;
    }

    if (password) {
      const hashed = await bcrypt.hash(password, 12);
      updateData.password = hashed;
    }

    const user = await userCollection.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    res.json({
      message: "User updated successfully",
      user
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteUser=async(req,res)=>{
    const {id}=req.params;
    try{
        await userCollection.findByIdAndDelete(id);
        res.json({message:"user deleted successfully!!"});
    }catch(err){
        res.json(err.message);
    }
}