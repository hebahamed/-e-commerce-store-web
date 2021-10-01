import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CategoryController {

    httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    options = {
        headers: this.httpHeaders
    };
    allProducts: any = [];

    constructor(private http: HttpClient) { }

    getCategories(onSuccess: (categories) => void, onError: (error) => void) {
        this.http.get('https://fakestoreapi.com/products/categories').subscribe((productList) => {
            onSuccess(productList);
            this.allProducts = productList;
        }, error => {
            onError(error);
        })
    }

    getProductsCategory(category, onSuccess: (categories) => void, onError: (error) => void) {
        this.http.get(`https://fakestoreapi.com/products/category/${category}`).subscribe((productList) => {
            onSuccess(productList);
            this.allProducts = productList;
        }, error => {
            onError(error);
        })
    }
}
