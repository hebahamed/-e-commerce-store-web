import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/modules/authentication/components/login/login.component';
import { CategoryListComponent } from 'src/modules/category/pages/category-list/category-list.component';
import { CreateUpdateProductComponent } from 'src/modules/products/pages/create-update-product/create-update-product.component';
import { ProductListComponent } from 'src/modules/products/pages/product-list/product-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'product',
    children: [
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'create-update',
        component: CreateUpdateProductComponent
      },
      {
        path: 'create-update/:id',
        component: CreateUpdateProductComponent
      },
      {
        path: 'list/category/:categoryName',
        component: ProductListComponent
      },
    ]
  },

  {
    path: 'category',
    children: [
      {
        path: 'list',
        component: CategoryListComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
