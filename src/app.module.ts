import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { proudctMoudle } from './proudcts/proudcts.moudle';

@Module({
  imports: [proudctMoudle,MongooseModule.forRoot(
    'mongodb+srv://dror:2rTl3imJEPfdQ5kU@cluster0.ozmjl.azure.mongodb.net/dbdror?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
