import { configDotenv } from "dotenv";
import bcrypt from "bcrypt";
import type { Request, Response, NextFunction } from "express";

configDotenv();

const saltRounds = parseInt(process.env.SALT_ROUNDS!);

const hashRequestBodyPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const password = req.body.password;
    const hash = await bcrypt.hash(password, saltRounds);

    res.locals.hash = hash;
    next();
  } catch (error) {
    console.log("Error at bcryptMiddleware.hashRequestBodyPassword: ", error);
    res.status(500).json({ message: "Internal server error." });
  }
}

export default {
  hashRequestBodyPassword
}
