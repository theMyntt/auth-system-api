import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('api')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('register')
  register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.registerService.createUser(name, email, password);
  }
}
