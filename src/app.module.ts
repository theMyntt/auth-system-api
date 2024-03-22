import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './main/module';

@Module({
  imports: [LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
