import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route";

dotenv.config();

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRouter);


const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error("MONGODB_URI environment variable is not defined");
}

mongoose
  .connect(uri)
  .then(() => console.log("user-db connected"))
  .catch((err) => console.error(err));



const PORT = process.env.PORT || 3101;
export const server = app.listen(PORT, () => {
  console.log(process.env.MONGODB_URI);

  console.log(`User-service is running on port ${PORT}`);
});
