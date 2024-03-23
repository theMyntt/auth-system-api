import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('api')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  login(@Body("email") email: string, @Body("password") password: string) {
    return this.loginService.getLogin(email, password);
  }
}
