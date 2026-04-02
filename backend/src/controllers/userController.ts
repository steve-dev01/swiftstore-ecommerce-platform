import userModel from "../models/userModel.js";
import type { Request, Response } from "express";
import type { UserRegisterInput } from "../types/user.type.js";

const registerNewUser = async (req: Request, res: Response) => {
  const { username, email, displayName }: UserRegisterInput = req.body;
  const hash: string = res.locals.hash;
  const data = { username, email, displayName, password: hash };

  const dbResponse = await userModel.insertNewUser(data);

  if (dbResponse.success) {
    res.status(201).json({
      success: true,
      message: "New user registered successfully."
    });
  } else {
    if (dbResponse.code == "ERR_USER_REGISTER_DUPLICATE") {
      res.status(400).json({
        success: false,
        message: "Duplicate username or password. Please try again."
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Unknown error occurred. Please try again."
      });
    }
  }
}

export default {
  registerNewUser
}
