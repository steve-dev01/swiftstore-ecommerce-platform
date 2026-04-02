import { Router } from "express";
import userController from "../controllers/userController.js";
import bcryptMiddleware from "../middlewares/bcryptMiddleware.js";

const router = Router();

router.post("/register",
  bcryptMiddleware.hashRequestBodyPassword,
  userController.registerNewUser
);

export default router;
