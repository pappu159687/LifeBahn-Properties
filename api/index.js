import dotenv from "dotenv";
import mongoose from "mongoose";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected Successfully!!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT | 8000, () => {
  console.log(`⚙️  Server is running on port : ${process.env.PORT}`);
});
