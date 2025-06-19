import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
//Routing
import userRouter from "./routes/user.js"
import authRouter from "./routes/auth.js"
import error from "./utils/error.js";
import { notFound } from "./utils/notfound.js";

const app = express()

//Basic middlewares
app.use(cors()); // Allow cross domains
app.use(morgan('dev')); // Show logs
app.use(express.json()); // For read body

// Routing GET,POST,PUT,PATCH,DELETE
// http://localhost:8000
// app.get('/',(req,res)=>{
//   // Code body
//   res.json({message:"Hello CC20"})
// })

//ENDPOINT http://localhost:8000/api/users
app.use('/api',userRouter)
app.use('/auth',authRouter)

//Error Handling
app.use(error)
//404
app.use(notFound)


const PORT = 8000
//Start Server
app.listen(8000,()=>console.log(`Server is running on port ${PORT}`))

