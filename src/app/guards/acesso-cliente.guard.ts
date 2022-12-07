import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { DecodedToken } from '../models/decoded-token';

@Injectable({
  providedIn: 'root'
})
export class AcessoClienteGuard implements CanActivateChild {

  constructor(
    private router: Router
  ) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const jwt = new JwtHelperService();
      const tokenOnline:string = localStorage.getItem("token") as string
      const tokenDecoded:DecodedToken = jwt.decodeToken(tokenOnline)
      if(tokenDecoded.perfil == "ROLE_FUNCIONARIO" || tokenDecoded.perfil == "ROLE_ADMIN") {
        return true
      }else {
        alert("Acesso não atutorizado para clientes.")
        this.router.navigate(["/home"])
        return false
      }
      
  }
  
}
