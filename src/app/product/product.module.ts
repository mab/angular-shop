import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { MdCardModule } from '@angular/material';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductService } from './product-service/product.service';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    ProductRoutingModule,
  ],
  providers: [
    ProductService,
  ],
  declarations: [
    ProductOverviewComponent,
    ProductListItemComponent,
  ]
})
export class ProductModule { }
