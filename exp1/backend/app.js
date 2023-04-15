import express from "express";
import connectDB from "./db/connectdb.js";
import * as dotenv from "dotenv";
dotenv.config()
import router from "./routes/router.js";
import cors from 'cors'


const port = process.env.PORT || 8000
const   db_url = process.env.DB_URL 

// Database Connection
connectDB(db_url);

const app = express();
//cors policy 
app.use(cors())
// JSON
app.use(express.json())
//  Load Routes
app.use("/api",router)



app.listen(port,()=>{
    console.log(`server started at htt://localhost:${port}`)
})