

import express from 'express'
import movieRouter from './routes/movieRoutes.js'
import connectDb from './config/db.js'
import {uploadPath} from './routes/movieRoutes.js'

const app = express();
app.use(express.json());
app.use("uploads",express.static(uploadPath))
// app.use(express.urlencoded({ extended: true }));

app.use("/", movieRouter)

connectDb();

app.listen(5000, () => {
    console.log("server started on port 5000")
})
