import { CrudService } from './crud.service';


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthGuardS implements CanActivate {

    constructor(private service: CrudService, private router: Router) {
  
    }
  
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
      let isLoggedIn = this.service.isLoggedIn();
    let isSousAdmin=this.service.isSousAdmin();
    let isSuperAdminInIn=this.service.isSuperAdminInIn();
  
      if (isLoggedIn  && isSuperAdminInIn && !isSousAdmin) {
        return true;
      }else{
  
        return false;
      }
      
    }
  
  }