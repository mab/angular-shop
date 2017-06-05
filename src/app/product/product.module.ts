import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { MdCardModule } from '@angular/material';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
  ],
  exports: [
    ProductOverviewComponent,
  ],
  declarations: [
    ProductOverviewComponent,
    ProductListItemComponent,
  ]
})
export class ProductModule { }
