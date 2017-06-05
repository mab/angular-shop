import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { MdCardModule } from '@angular/material';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductService } from './product-service/product.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRoutingModule } from './product-routing.module';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    ProductRoutingModule,
    HttpModule
  ],
  exports: [
    ProductOverviewComponent,
  ],
  providers: [
    ProductService,
  ],
  declarations: [
    ProductOverviewComponent,
    ProductListItemComponent,
    ProductDetailsComponent,
  ]
})
export class ProductModule { }
