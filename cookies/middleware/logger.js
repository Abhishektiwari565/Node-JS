
export const isAuthenticated=(req,res,next)=>{
    if(req.cookies.auth){
        next();
    }else{
        res.json({message:"login first to access home page"})
    }
}