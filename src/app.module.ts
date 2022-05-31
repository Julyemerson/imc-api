import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { HealthInformationsModule } from './health-informations/health-informations.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, HealthInformationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
