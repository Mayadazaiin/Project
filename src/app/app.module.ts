import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './products/components/all-products/all-components/all-products.component';
import { ProductComponent } from './products/components/product/product.component';
import { CartsComponent } from './carts/components/carts/carts.component';
import { CartsModule } from './carts/carts.module';
import { RouterModule } from '@angular/router';
import { DefaultPageComponent } from './default-page/default-page.component';


@NgModule({
  declarations: [AppComponent,AllProductsComponent,ProductComponent, DefaultPageComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, SharedModule,CartsModule,RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
