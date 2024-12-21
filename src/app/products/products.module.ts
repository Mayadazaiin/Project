import { AllProductsComponent } from './components/all-products/all-components/all-products.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetailsComponent } from './components/products.details/products.details.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';




@NgModule({
  // declarations: [, ProductsDetailsComponent],
  imports: [CommonModule, BrowserModule, HttpClientModule],
  declarations: [

  ],
})
export class ProductsModule {}
