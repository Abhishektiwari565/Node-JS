

export const isLogin=(req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    res.json({message:"login first to access home page"});
}