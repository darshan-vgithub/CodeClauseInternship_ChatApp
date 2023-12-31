const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("../backend/routes/userRoutes");
const chatRoutes=require("../backend/routes/chatRoutes")
const messageRoutes=require("../backend/routes/messageRoutes")
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());


app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`The Server is Running on port ${PORT}`.yellow.bold)
);
