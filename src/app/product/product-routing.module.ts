import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductOverviewComponent } from './product-overview/product-overview.component';

const productsRoutes: Routes = [
  {path: '', component: ProductOverviewComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(productsRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class ProductRoutingModule {
}
