import {Injectable, inject} from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import { AccountService } from '../_services/account.service';
import{ToastrService} from 'ngx-toastr';
import{map} from 'rxjs/operators';

// @Injectable({
//   providedIn:'root'
// })

import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const auth=inject(AccountService);
  const t=inject(ToastrService);
  console.log('You shall not pass');
  return auth.currentUser$.pipe(map(user=>{
    if(user)
    {
      return true;
    }
    else
    {
      t.error('You shall not pass!');
      return false;
    }
  }));
}

// export class AuthGuard implements CanActivate{
//   constructor(private accountService:AccountService,private toastr:ToastrService){}
//   canActivate(): Observable<boolean> {
//     return this.accountService.currentUser$.pipe(
//       map(user=>{
//         if(user) return true;
//         this.toastr.error('You shall not pass!');
//       })
//     );

//   }

// }