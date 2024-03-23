import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.userService.setUser(name, email, password);
  }

  @Post('login')
  login(
    @Body('email') email: string, 
    @Body('password') password: string
  ) {
    return this.userService.getLogin(email, password);
  }
}
