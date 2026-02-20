import express from 'express'
import {connectDB} from './config/db.js'
import cookieParsar from 'cookie-parser'
import cors from 'cors'
import auth_routes from './routes/auth_routes.js'
import admin_routes from './routes/admin_routes.js'
import transaction_routes from "./routes/transaction_routes.js";
import dotenv from 'dotenv'

dotenv.config();
const app=express();
app.use(express.json());
app.use(cookieParsar());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
connectDB();

app.use("/api/auth",auth_routes);
app.use("/api/admin",admin_routes);
app.use("/api/transaction", transaction_routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});