import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public afAuth:AngularFireAuth,
  	public router:Router
  	) { }


  /*登录拦截*/
  canActivate():Observable<boolean>{
    return this.afAuth.authState.map(auth=> {
      /*如果当前状态没登录，则跳转到登录页面,否侧不变*/
      if(!auth){
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    })
  }
}
