import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'ngx-flash-messages';
import { User } from '../../models/user';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { UserService } from '../../services/user.service'
import { SettingsService } from '../../services/settings.service'

@Component({
  selector: 'app-ed-users',
  templateUrl: './ed-users.component.html',
  styleUrls: ['./ed-users.component.css']
})
export class EdUsersComponent implements OnInit {

  id:string;
  user:User= {
  	name:"",
  	email:"",
  	age:0
  }
  disableED:boolean = true;
  constructor(
  		public flashMessagesService: FlashMessagesService,
  		public router: Router,
  		public route:ActivatedRoute,
      public userservice: UserService,
  		public settingsservice: SettingsService
  	) { }

  ngOnInit() {
  	this.id = this.route.snapshot.params["id"];
  	this.userservice.getUser(this.id).subscribe(user=>{
  		this.user = user;
  	})
  	this.disableED = !this.settingsservice.getSettings().disEdt;
  }

  onsubmit({value,valid}:{value:User,valid:boolean}){
  	if(!valid) {
		this.flashMessagesService.show('更新失败', {
	      classes: ['alert', 'alert-warning','alertfrom'],
	      timeout: 3000, 
    	});
    	this.router.navigate(["/ed-user/"+this.id])
  	}else {
	    this.userservice.updateUser(this.id,value).subscribe(user=>{
	    	this.flashMessagesService.show('更新成功', {
		      classes: ['alert', 'alert-success'], 
		      timeout: 3000, 
		    });
	    	this.router.navigate(["/user/"+this.id])

	    })
	    
  	}
  }

}
