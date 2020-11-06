require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Database connect
const uri = "Type your mongoDB URI here.";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established.");
});

// Routes
const notesRouter = require("./routes/notes");
app.use("/notes", notesRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}



let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

// Listen
app.listen(port, () => {
  console.log(`Server is connected successfully and running on port: ${port}`);
});
