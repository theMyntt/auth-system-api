import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/auth';
import { LoginController } from 'src/main/controller';
import { LoginService } from 'src/main/service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/User'),
    MongooseModule.forFeature([{ name: "User", schema: UserSchema }])
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
