import express from "express";
import connectDB from "./src/config/db.config.js";
import app from "./src/app.js";
import initMessageBroker from "./src/services/messageBroker.service.js";

const port = process.env.PORT || 3000;


await connectDB()
initMessageBroker()

app.listen(port, () => console.log(`✅ Server running on port ${port}`));