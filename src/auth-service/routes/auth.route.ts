import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";
import { Router } from "express";
import { Login } from "../dto/user.dto";

const router = Router();

const authService = new AuthService();
const authController = new AuthController(authService);

router.post("/login", async (req, res) => {
  const credentials: Login = req.body;
  try {
    const token = await authController.login(credentials);
    return res.status(201).json(token);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
});

export default router;
