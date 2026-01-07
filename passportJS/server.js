import express from 'express'
import cookieParser from 'cookie-parser'
import {connectDB} from './config/db.js'
import session from 'express-session'
import passport from 'passport'
import router from './routes/AuthRoutes.js'
import './middleware/passport.js'
import mongoStore from 'connect-mongo'

const app=express();
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret:"abcAbc",
    resave:false,
    saveUninitialized:false,
    store:mongoStore.create({
        mongoUrl:"mongodb://localhost:27017/passport"
    }),
    cookie:{
        maxAge:1000*60*60
    }
}))


app.use(passport.initialize());
app.use(passport.session());

app.use("/",router);
app.listen(4000,()=>{
    console.log("server started");
})