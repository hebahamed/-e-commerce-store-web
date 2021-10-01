import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CategoryController } from 'src/core/category-controller';
import { LoginController } from 'src/core/login-controller';
import { ProductController } from 'src/core/product-controller';
import Toastify from 'toastify-js'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['image', 'name', 'price', 'category', 'description', 'buttons'];
  dataSource: MatTableDataSource<any>;
  isError: boolean;
  isLoading: boolean;
  category;
  allCategories = [];

  constructor(private productController: ProductController,
    private categoryController: CategoryController,
    private translate: TranslateService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public loginController: LoginController) { }

  ngOnInit(): void {
    const categoryName = this.activatedRoute.snapshot.paramMap.get('categoryName');
    if (categoryName) {
      this.category = categoryName;
      this.getAllProductsCategory();
    } else {
      if (this.productController.allProducts.length) {
        this.dataSource = new MatTableDataSource(this.productController.allProducts);
      } else {
        this.getAllProducts();
      }
    }
    this.getAllCategories();
  }

  getAllCategories() {
    this.assignControllsLoading(true, false);
    this.categoryController.getCategories((res) => {
      this.assignControllsLoading(false, false);
      this.allCategories = res;
    }, error => {
      this.assignControllsLoading(false, true);
    });
  }

  getAllProducts() {
    this.assignControllsLoading(true, false);
    this.productController.getProducts((res) => {
      this.assignControllsLoading(false, false);
      this.dataSource = res;
    }, error => {
      this.assignControllsLoading(false, true);
    });
  }

  getAllProductsCategory(category?) {
    this.assignControllsLoading(true, false);
    this.categoryController.getProductsCategory(category ? category : this.category, (res) => {
      this.assignControllsLoading(false, false);
      this.dataSource = res;
    }, error => {
      this.assignControllsLoading(false, true);
    });
  }

  addProduct(element?) {
    if (element) {
      this.router.navigate([`product/create-update/${element.id}`]);
    } else {
      this.router.navigate([`product/create-update`]);
    }
  }

  deleteProduct(product) {
    this.productController.deleteProduct(product.id, (productDeleted) => {
      const index = this.productController.allProducts.findIndex(pro => pro.id === product.id);
      this.productController.allProducts.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.productController.allProducts);
      Toastify({
        text: "Product Deleted Successfully",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      }).showToast();
    }, (error) => {
      Toastify({
        text: "Faild to Delete product",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      }).showToast();
    });
  }

  assignControllsLoading(loading, error) {
    this.isLoading = loading;
    this.isError = error;
  }

}
