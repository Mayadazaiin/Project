import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-components/all-products.component';
import { ProductsDetailsComponent } from './products/components/products.details/products.details.component';
import { CartsComponent } from './carts/components/carts/carts.component';
import { CommonModule } from '@angular/common';
import { DefaultPageComponent } from './default-page/default-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/default-page', pathMatch: 'full' }, // Set the default route
  { path: 'default-page', component: DefaultPageComponent },
  { path: 'products', component: AllProductsComponent },
  { path: 'details/:id', component: ProductsDetailsComponent },
  { path: 'carts', component: CartsComponent },
  { path: '*', redirectTo: 'carts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
