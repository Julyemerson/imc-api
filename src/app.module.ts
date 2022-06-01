import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, HealthModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
