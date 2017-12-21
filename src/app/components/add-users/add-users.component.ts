import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'ngx-flash-messages';
import { User } from '../../models/user';
import { Router} from '@angular/router';
import { UserService } from '../../services/user.service';
import { SettingsService } from '../../services/settings.service';
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  user:User= {
  	name:"",
  	email:"",
  	age:0
  }
  disableADD:boolean = true;
  constructor(
  		public flashMessagesService: FlashMessagesService,
  		public router: Router,
      public userservice: UserService,
  		public settingsservice: SettingsService
  	) { }

  ngOnInit() {
    this.disableADD = !this.settingsservice.getSettings().disAdd;
  }


  onsubmit({value,valid}:{value:User,valid:boolean}){
  	if(this.disableADD){
  		value.age = 0;
  	}
  	if(!valid) {
		this.flashMessagesService.show('添加失败', {
	      classes: ['alert', 'alert-warning','alertfrom'],
	      timeout: 3000, 
    	});
    	this.router.navigate(["adduser"])
  	}else {
  		
	    this.userservice.newUser(value).subscribe(user=>{
	    	this.flashMessagesService.show('添加成功', {
		      classes: ['alert', 'alert-success'], 
		      timeout: 3000, 
		    });
	    	this.router.navigate(["/"])

	    })
	    
  	}
  }
}
