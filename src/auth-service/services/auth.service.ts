import { Login } from "../dto/user.dto";
import jwt from "jsonwebtoken";
import axios from "axios";

export class AuthService {
  async login(credentials: Login): Promise<string> {
    const response = await axios.get(`${process.env.USER_API_URL_DEV}/login`, {
      params: { credentials },
    });

    const user: any = response.data;

    if (!response) throw new Error("bruh");

    const payload = { id: user.id, email: user.email, role: user.role };

    const token = jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: "48h",
    });

    return token;
  }
}
