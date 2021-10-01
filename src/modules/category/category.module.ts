import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CategoryModule { }
