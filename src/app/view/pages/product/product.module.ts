import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { CategoryComponent } from './category/category.component';
import { AttributesComponent } from './attributes/attributes.component';
import { TypeComponent } from './type/type.component';
import { SlabpriceComponent } from './slabprice/slabprice.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ProductComponent,
    CategoryComponent,
    AttributesComponent,
    TypeComponent,
    SlabpriceComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
