import { Injectable } from '@angular/core';
import { Settings } from '../models/setting';
@Injectable()
export class SettingsService {
  settings:Settings = {
  	allregiter:true,//false是允许注册
  	disAdd:true,//false是允许添加
  	disEdt:true //alse是允许编辑
  }
  constructor() { 
  	if(localStorage.getItem("settings") != null){
  		this.settings = JSON.parse(localStorage.getItem("settings"));
  	}
   }

  getSettings(){
  	return this.settings
  }
  changeSettings(settings:Settings){
  	localStorage.setItem("settings",JSON.stringify(settings))
  }
}
