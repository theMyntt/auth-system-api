import { Module } from '@nestjs/common';
import { LoginModule, RegisterModule } from './main/module';

@Module({
  imports: [LoginModule, RegisterModule],
})
export class AppModule {}
