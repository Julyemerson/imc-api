import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { ImcModule } from './imc/imc.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, ImcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
