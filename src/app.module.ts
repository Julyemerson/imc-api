import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { HealthModule } from './health/health.module';
import { AppController } from './app.controler';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, HealthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
