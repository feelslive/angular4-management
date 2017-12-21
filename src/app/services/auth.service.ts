import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
@Injectable()
export class AuthService {

  constructor(
  	public afAuth:AngularFireAuth
  	) { }


  /*登录*/
  login(email:string,password:string) {
  	return new Promise((resolve,reject)=>{
  		this.afAuth.auth.signInWithEmailAndPassword(email,password)
  		.then(userdata=>resolve(userdata),err=>reject(err));
  	})
  }
  /*注册*/
  regiter(email:string,password:string){
    return new Promise((resolve,reject)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(email,password)
      .then(userdata=>resolve(userdata),err=>reject(err));
    })
  }


  /*登录状态方法*/
  getAuth(){
  	return this.afAuth.authState.map(auth=> auth)
  }
  logout(){
    return this.afAuth.auth.signOut();
  }

}
