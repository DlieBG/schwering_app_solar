import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { DbService } from './services/db/db.service';
import { SenecService } from './services/senec/senec.service';
import { SenecController } from './controllers/senec/senec.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    HttpModule
  ],
  controllers: [SenecController],
  providers: [DbService, SenecService],
})
export class AppModule {}
