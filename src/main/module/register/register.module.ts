import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/auth';
import { RegisterController } from 'src/main/controller';
import { RegisterService } from 'src/main/service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/User'),
    MongooseModule.forFeature([{ name: "User", schema: UserSchema }])
  ],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
