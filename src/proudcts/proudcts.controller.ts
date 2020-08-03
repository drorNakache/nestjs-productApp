import { ProudctsService } from './proudcts.services';
import { Controller,Post,Body, Get, Param, Patch, Delete } from "@nestjs/common";



@Controller('proudcts')

export class proodctsController{
constructor(private readonly ProductsService:ProudctsService){}

    @Post()
async addproudct(
@Body(`title`) prodTitle:string,
@Body(`description`) prodDesc:string,
@Body(`price`) prodPrice:number )
{
    const generatedId= await
this.ProductsService.insertProudct(prodTitle,prodDesc,prodPrice);
  return {id:generatedId}   ;
}

@Get()
getAllProudcts()
{
return this.ProductsService.getProudcts();
}

@Get(`:id`)

getProudct(@Param(`id`) prodId:string,)
{
  return this.ProductsService.getSingleProudct(prodId);
}

@Patch(`:id`)
updateProudct(
  @Param(`id`) prodId:string,
  @Body(`title`) prodTitle:string,
  @Body(`description`) prodDesc:string,
  @Body(`price`) prodPrice:number
)
{
  this.ProductsService.updateProudct(prodId,prodTitle,prodDesc,prodPrice)
  return null;
}

@Delete('id:')
removeProduct(@Param(`id`) prodId:string,)
{this.ProductsService.deleteProduct(prodId)
  return null;

}

}


