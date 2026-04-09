import {todoCollection} from '../models/todo.js'

export const addTodo=async(req,res)=>{
    try{
        const {text}=req.body;
        const todos=await todoCollection.findOne({userId});
        if(todos){
            res.json({message:"todo already exists"});
        }
        const newTodo= await todoCollection.create({text,userId: req.user.id});
        res.json({message:"todo added successfully",newTodo});
    }catch(err){
        res.json({message:"failed to add todo",err});
    }
}

export const getTodo=async(req,res)=>{
    try{
        
        const todos=await todoCollection.find({userId: req.user.id});
        res.json({message:"todo fetched successfully",todos});
    }catch(err){
        res.json({message:"failed to get todo",err});
    }
}

export const deleteTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        await todoCollection.findByIDAndDelete(id);
        res.json({message:"todo deleted successfully"});
    }catch(err){
        res.json({message:"failed to delete todo",err});
    }
}