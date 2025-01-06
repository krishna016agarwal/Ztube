import express from "express";

 import connectDb from "./db/db.js";

import dotenv from "dotenv";

dotenv.config({
  path:"./env"
})


import { app } from "./app.js";
const port = process.env.PORT || 4000;






connectDb()
.then(app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
   
}))
.catch((error)=> {
  console.log("MONGODB CONNECTION ERROR",error)}
) 