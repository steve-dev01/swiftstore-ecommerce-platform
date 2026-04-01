import express from "express";
import type { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/swiftstore", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Hello from swiftstore API." });
});

export default app;
