import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginController {

    httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    options = {
        headers: this.httpHeaders
    };

    role: string;
    constructor(private http: HttpClient) {
    }

    loginUser(userData, onSuccess: (res) => void, onError: (error) => void) {
        const requestBody = {
            username: userData.username,
            password: userData.password
        }
        this.http.post('https://fakestoreapi.com/auth/login', JSON.stringify(requestBody), this.options).subscribe((res) => {
            this.role = userData.username.toLowerCase();
            onSuccess(res);
        }, error => {
            onError(error);
        });
    }
}