import app from "./src/app.js"
import "dotenv/config";
import {initMessageBroker} from "./src/service/messageBroker.service.js"
import { connectDB } from "./src/config/db.config.js";

const PORT = 3000;

connectDB()
initMessageBroker()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});