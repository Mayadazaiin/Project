import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartsComponent } from '../carts/components/carts/carts.component';

@NgModule({
  declarations: [HeaderComponent, SpinnerComponent, SelectComponent],
  imports: [CommonModule, BrowserModule, RouterModule, HttpClientModule,FormsModule,ReactiveFormsModule],
  exports: [HeaderComponent, SpinnerComponent,SelectComponent,FormsModule,ReactiveFormsModule],
})
export class SharedModule {}
