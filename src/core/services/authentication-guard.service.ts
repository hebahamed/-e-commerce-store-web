import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginController } from '../login-controller';
@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuardService {
    constructor(private _router: Router, private loginController: LoginController) {
    }

    canActivate() {
        if (this.loginController.role === 'admin') {
            return true;
        }
        return false;
    }
}