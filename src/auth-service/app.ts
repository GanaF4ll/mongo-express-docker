import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route";

dotenv.config();

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRouter);

const PORT = process.env.PORT || 3301;
export const server = app.listen(PORT, () => {
  console.log(`Auth-service is running on port ${PORT}`);
});
