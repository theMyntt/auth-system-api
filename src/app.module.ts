import { Module } from '@nestjs/common';
import { LoginModule } from './main/module';

@Module({
  imports: [LoginModule],
})
export class AppModule {}
