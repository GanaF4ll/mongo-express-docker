import express from "express";
import dotenv from "dotenv";
// import userRouter from "./routes/user.route";
// import timerRouter from "./routes/timer.route";

dotenv.config();

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use("/users", userRouter);
// app.use("/timers", timerRouter);

const PORT = process.env.PORT || 3000;
export const server = app.listen(PORT, () => {

  console.log(`Api-gateway is running on port ${PORT}`);
});
