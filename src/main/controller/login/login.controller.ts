import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from 'src/main/service';

@Controller('api')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  login(@Body("email") email: string, @Body("password") password: string): string {
    return this.loginService.getLogin(email, password);
  }
}
