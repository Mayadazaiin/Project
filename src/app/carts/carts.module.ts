import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './components/carts/carts.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [CommonModule, BrowserModule,HttpClientModule,FormsModule,ReactiveFormsModule],
})
export class CartsModule {}
