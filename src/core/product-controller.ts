import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./models/product.model";

@Injectable()
export class ProductController {

    httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    options = {
        headers: this.httpHeaders
    };
    allProducts: any = [];

    constructor(private http: HttpClient) { }

    getProducts(onSuccess: (products) => void, onError: (error) => void) {
        this.http.get('https://fakestoreapi.com/products').subscribe((productList) => {
            onSuccess(productList);
            this.allProducts = productList;
        }, error => {
            onError(error);
        })
    }

    addProduct(product: Product, onSuccess: (products) => void, onError: (error) => void) {
        const request = {
            title: product.title,
            price: product.price,
            description: product.description,
            image: product.image,
            category: product.category
        }
        this.http.post('https://fakestoreapi.com/products', JSON.stringify(request), this.options).subscribe((productRes) => {
            onSuccess(productRes);
        }, error => {
            onError(error)
        });
    }

    updateProduct(id, product, onSuccess: (product) => void, onError: (error) => void) {
        const request = {
            title: product.title,
            price: product.price,
            description: product.description,
            image: product.image,
            category: product.category
        }
        this.http.put(`https://fakestoreapi.com/products/${id}`, JSON.stringify(request), this.options).subscribe((productRes) => {
            onSuccess(productRes);
        }, error => {
            onError(error)
        });
    }

    deleteProduct(id, onSuccess: (products) => void, onError: (error) => void) {
        this.http.delete(`https://fakestoreapi.com/products/${id}`).subscribe((productRes) => {
            onSuccess(productRes);
        }, error => {
            onError(error)
        });
    }

    getProduct(id, onSuccess: (products) => void, onError: (error) => void) {
        this.http.get(`https://fakestoreapi.com/products/${id}`).subscribe((productRes) => {
            onSuccess(productRes);
        }, error => {
            onError(error)
        });;
    }
}