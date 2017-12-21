import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/user';
import "rxjs/add/operator/map";

@Injectable()
export class UserService {

 constructor(
  	  public http:Http
  	) { }
 /*获取所有信息*/
  getUsers(){
  	 return this.http.get("http://localhost:3000/users").map(res => res.json());
  }
  /*添加信息*/
  newUser(user:User){
  	return this.http.post("http://localhost:3000/users",user).map(res => res.json());
  }
  /*获取个人信息*/
  getUser(id:string){
  	return this.http.get("http://localhost:3000/users/"+id).map(res => res.json());
  }
  /*更新个人细信息*/
  updateUser(id,user){
    return this.http.put("http://localhost:3000/users/"+id,user).map(res => res.json());
  }
  /*删除个人信息*/
  deleteUser(id){
    return this.http.delete("http://localhost:3000/users/"+id).map(res => res.json());
  }
}
