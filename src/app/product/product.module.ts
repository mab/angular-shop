import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOverviewComponent } from './product-overview/product-overview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ProductOverviewComponent,
  ],
  declarations: [
    ProductOverviewComponent,
  ]
})
export class ProductModule { }
