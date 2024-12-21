import express from "express";
 import connectDb from "./db/db.js";
import dotenv from "dotenv";

dotenv.config({
  path:"./env"
})
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

connectDb();
