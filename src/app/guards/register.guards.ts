import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { SettingsService } from '../services/settings.service'

@Injectable()
export class RegisterGuard implements CanActivate {

  constructor(
  	public router:Router,
    public settingsservice:SettingsService
  	) { }


  /*登录拦截*/
  canActivate():boolean{
    if(this.settingsservice.getSettings().allregiter){
       return true;
    } else {
      this.router.navigate(['./login'])
      return false
    }
  }
}
