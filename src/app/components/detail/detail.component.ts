import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { UserService } from '../../services/user.service'
import { FlashMessagesService } from 'ngx-flash-messages';
import { SettingsService } from '../../services/settings.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  id:string;
  userv:object;
  hasage:boolean = false;
  showfrominput:boolean = false;
  disableED:boolean = true;
  constructor(
  	public route:ActivatedRoute,
  	public router:Router,
  	public userservice:UserService,
  	public flashMessagesService: FlashMessagesService,
    public settingsservice: SettingsService
  	) { }

  ngOnInit() {
  	this.id = this.route.snapshot.params["id"];
  	this.userservice.getUser(this.id).subscribe(user=>{
      if(user.age == undefined) user.age = 0;
  		if(user.age > "0"){
  			this.hasage = true;
  		}
  		 this.userv = user;
  	})
    this.disableED = !this.settingsservice.getSettings().disEdt;
  }
  /*更新*/
  updateage(id:string){
  	this.userservice.updateUser(this.id,this.userv).subscribe(user=>{
  		this.flashMessagesService.show('年龄已更新', {
  			classes: ['alert', 'alert-success'], 
		    timeout: 1000, 
  		})
  		this.showfrominput = false;
  		this.router.navigate(['/user/'+this.id])
  	})
  }
  /*删除*/
  deleteuser(id:string){
  	if(confirm("确定要删除吗?"))
	this.userservice.deleteUser(this.id).subscribe(user=>{
	  		this.flashMessagesService.show('已删除', {
	  			classes: ['alert', 'alert-success'], 
			    timeout: 1000, 
	  		})
	  		this.router.navigate(["/"])
	 })
  }

}
