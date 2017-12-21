import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string;
  password:string;
  constructor(
  		public authservice:AuthService,
  		public router:Router,
  		public flashMessagesService:FlashMessagesService
  	) { }

  ngOnInit() {
  }


  onSubmit(){
  	this.authservice.regiter(this.email,this.password).then((res)=>{
  		this.flashMessagesService.show('注册成功', {
		      classes: ['alert', 'alert-success'], 
		      timeout: 3000, 
		    });
	    this.router.navigate(["/"])
  	}).catch((err)=>{
  		this.flashMessagesService.show('注册失败', {
		      classes: ['alert', 'alert-danger'], 
		      timeout: 3000, 
		});
  		this.router.navigate(["/register"])
  	})
  }

}
