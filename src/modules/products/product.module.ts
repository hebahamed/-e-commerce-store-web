import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { CreateUpdateProductComponent } from './pages/create-update-product/create-update-product.component';



@NgModule({
  declarations: [ProductListComponent, CreateUpdateProductComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProductModule { }
