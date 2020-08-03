import { Product } from './proudct.model';

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';


@Injectable()

export class ProudctsService{
private products:Product[]=[];
constructor(@InjectModel('product') private readonly productModel:Model<Product>
    ){}

async insertProudct(title:string,desc:string,price:number){
const newProudct=new this.productModel({title:title,description:desc,price:price});
const result= await newProudct.save();

return result.id as string;
}

getProudcts()
{return [...this.products]; }

getSingleProudct(proudctId:string)
{
 const product=this.findProudct(proudctId)[0];   
     return {...product};
    
}

updateProudct(productId:string,title:string,desc:string,price:number)
{
    const [product,index]=this.findProudct(productId);
    const updatedProudct={...product};
    if (title) 
    {updatedProudct.title=title;}
    if (desc) 
    {updatedProudct.description=desc;}
    if (price) 
    {updatedProudct.price=price;}
    this.products[index]=updatedProudct;
}


deleteProduct(ProdId:string)
{
    const index=this.findProudct(ProdId)[1]
    this.products.splice(index,1); 
}

private findProudct(id:string):[Product,number]
{
    const proudctIndex=this.products.findIndex((prod)=>prod.id===id);
    const proudct=this.products[proudctIndex];
    if (!proudctIndex)
    {throw new NotFoundException(`that proudct missing...`)}
    return [proudct,proudctIndex];
}


}