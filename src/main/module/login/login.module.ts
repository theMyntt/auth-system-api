import { Module } from '@nestjs/common';
import { LoginController } from 'src/main/controller';
import { LoginService } from 'src/main/service';

@Module({
  imports: [],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
