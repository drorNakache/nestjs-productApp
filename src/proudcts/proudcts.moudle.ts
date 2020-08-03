
    
import { Module } from '@nestjs/common';
import { proodctsController } from './proudcts.controller';
import { ProudctsService } from './proudcts.services';
import { ProudctSchema } from './proudct.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module(
    {
        imports:[
            MongooseModule.forFeature([{name:'product',schema:ProudctSchema}])
        ],
        controllers:[proodctsController],
        providers:[ProudctsService]
    }
)

export class proudctMoudle{}