import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    //Logic for authentication goes here
    let status = this.authService.isLoggedIn();
    if(status == false){
      //redirect to loginComponent
      this.authService.message$.next("Please Login to continue");
      this.router.navigateByUrl('/login');
    }
      return status;
  }
}
