import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";

const app = express();
dotenv.config();

//middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = 5000 || 4000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (err) {
    console.log(err)
  }
};
start(); 
