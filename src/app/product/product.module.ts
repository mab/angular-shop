import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { MdCardModule } from '@angular/material';

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
  ]
})
export class ProductModule { }
