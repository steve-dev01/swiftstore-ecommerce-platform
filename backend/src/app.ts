import express from "express";
import type { Request, Response } from "express";
import mainRoute from "./routes/mainRoutes.js";

const app = express();

app.use(express.json());

app.use("/api", mainRoute);

app.get("/swiftstore", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Hello from swiftstore API." });
});

export default app;
