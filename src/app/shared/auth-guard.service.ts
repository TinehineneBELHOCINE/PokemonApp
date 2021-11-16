import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router,private authService: AuthService) { }
 // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   // throw new Error('Method not implemented.');
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
   //alert('Le guard a bien été mis en place');
    //return true;
  const url: string=state.url;
  return this.checkLogin(url);
  }
  /**
   * vérifier si le user est connecté ou non
   */
   checkLogin(url:string): boolean{
if(this.authService.isLoggedIn){
return true;
}
this.authService.redirectUrl=url;
this.router.navigate(['/login']);
return false;
   }
}
