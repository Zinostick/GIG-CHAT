const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");

dbConnect();
const app = express();
const port = 5000;
dotenv.config();

app.use(express.json()); // to accept json data

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.listen(port, () => {
  console.log(`app is listening to port ${port}`);
});
