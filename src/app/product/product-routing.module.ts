import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const productsRoutes: Routes = [
  {path: '', component: ProductOverviewComponent},
  {path: 'details/:id', component: ProductDetailsComponent},
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
