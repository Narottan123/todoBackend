const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.port || 5000;

mongoose
  .connect(
    "mongodb+srv://Narottam2000:Sarkar2000@cluster0.bciguah.mongodb.net/todo",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("MongoDB is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", route);

app.listen(PORT, () => {
  console.log(`Listening On Port ${PORT} `);
});
