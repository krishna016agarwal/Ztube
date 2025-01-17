import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
 
app.use(express.json({limit: "16kb"}))  //insert json data
app.use(express.urlencoded({extended: false, limit: "16kb"})) //multiform data insert
app.use(express.static("public"))  //to make public folder available to frontend
app.use(cookieParser())


//routes import
import register from './routes/user.routes.js'
import login from './routes/user.routes.js'
//routes declaration

app.use("/api/v1/users", register)
app.use("/api/v1/users", login)

// http://localhost:8000/api/v1/users/register

export { app }