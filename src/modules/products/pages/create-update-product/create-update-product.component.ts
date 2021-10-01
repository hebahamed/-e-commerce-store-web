import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/core/models/product.model';
import { ProductController } from 'src/core/product-controller';
import * as _ from 'lodash';
import Toastify from 'toastify-js'

@Component({
  selector: 'app-create-update-product',
  templateUrl: './create-update-product.component.html',
  styleUrls: ['./create-update-product.component.scss']
})
export class CreateUpdateProductComponent implements OnInit {

  product: Product = new Product();
  isUpdateMode: boolean;
  productId;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productController: ProductController) { }

  ngOnInit(): void {
    const productIdFromUrl = this.activatedRoute.snapshot.paramMap.get('id');
    if (productIdFromUrl) {
      this.isUpdateMode = true;
      this.productId = productIdFromUrl
      this.getProductById();
    }
  }


  getProductById() {
    this.productController.getProduct(this.productId, (product) => {
      this.product = product;
    }, error => {
    });
  }

  saveProduct() {
    this.productController.addProduct(this.product, (product) => {
      this.productController.allProducts.push(product);
      Toastify({
        text: "Product Created Successfully",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      }).showToast();
      this.router.navigate(['product/list']);
    }, error => {
      Toastify({
        text: "Faild to create product",
        backgroundColor: "#ff7272",
      }).showToast();
    });

  }

  updateProduct() {
    this.productController.updateProduct(this.productId, this.product, (product) => {
      const index = this.productController.allProducts.findIndex(product => product['id'] === this.product.id);
      this.productController.allProducts[index] = _.cloneDeep(product);
      Toastify({
        text: "Product Updated Successfully",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      }).showToast();
      this.router.navigate(['product/list']);
    }, error => {
      Toastify({
        text: "Faild to update product",
        backgroundColor: "#ff7272",
      }).showToast();
    });
  }

}
