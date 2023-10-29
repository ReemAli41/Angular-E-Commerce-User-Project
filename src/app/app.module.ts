import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProdComponent } from './products/components/prod/prod.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { CartsModule } from './carts/carts.module';

@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    ProdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonModule,
    CartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
