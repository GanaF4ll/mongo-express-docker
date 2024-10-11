import { Login } from "../dto/user.dto";
import { AuthService } from "../services/auth.service";

export class AuthController {
  constructor(private service: AuthService) {}

  async login(credentials: Login) {
    return await this.service.login(credentials);
  }
}
