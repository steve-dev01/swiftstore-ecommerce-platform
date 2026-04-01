import { configDotenv } from "dotenv";
import app from "./app.js";

configDotenv();

const PORT = parseInt(process.env.SERVER_PORT!) || 3000;
const HOST = process.env.SERVER_HOST || "127.0.0.1";

app.listen(PORT, HOST, () => {
  console.log(`Server listening on ${HOST}:${PORT} ...`);
});
