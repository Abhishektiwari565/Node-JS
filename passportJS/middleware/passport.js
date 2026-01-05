import passport from 'passport'
import {Strategy as LocalStrategy} from 'passport-local'
import bcrypt from 'bcrypt'
import {Auth} from '../models/AuthModels.js'

const localStrategy=new LocalStrategy({usernameField:"email"},async(email,password,done)=>{
    try{
        const user=await Auth.findOne({email});
        if(!user){
            return done(null,false,{message:"user not exist"})
        }

       const isMatch=bcrypt.compare(password,user.password);
       if(!isMatch){
        return done(null,false,{message:"invalid password"});
       }

       return done(null,user,{message:"signin successfully"});
    }catch(err){
        return done(err.message,false,{message:"signin failed"});
    }
});

passport.use(localStrategy)
//to save id of user in session storage 

passport.serializeUser((user,done)=>{
    done(null,user._id);
});

//to retrive user data using id
passport.deserializeUser((id,next)=>{
   const user= await Auth.findById(id);
   done(null,user);
})

