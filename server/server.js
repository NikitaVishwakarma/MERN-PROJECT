import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const morgan = require("morgan");
require("dotenv").config();

const app = express();

//database connection
mongoose
  .connect(process.env.DATABASE, {
    // useNewUrlParser: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    //these are use because to avoid warnings in our console
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB ERROR", err));

//middleware
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.post("/api/register", (req, res) => {
  console.log("RESITER ENDPOINT", req.body);
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server running on port ${port}`));
