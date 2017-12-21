import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SettingsService } from '../../services/settings.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import { Router} from '@angular/router';
@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.css']
})
export class NavberComponent implements OnInit {
  isLogin:boolean;
  loguser:string;
  showregiter:boolean;
  constructor(
    public authservice:AuthService,
  	public settingsservice:SettingsService,
  	public router: Router,
  	public flashMessagesService: FlashMessagesService
  	) { }

  ngOnInit() {
  	this.authservice.getAuth().subscribe(auth=>{
  		if(auth){
  			this.isLogin = true;
        this.loguser = auth.email;
  		} else {
  			this.isLogin = false;
  		}
      this.showregiter = this.settingsservice.getSettings().allregiter;
  	})
  }
  onlogout(){
  	this.authservice.logout()
  	this.flashMessagesService.show('用户已退出', {
  		classes: ['alert', 'alert-success'],
  		timeout: 3000, 
  	});
  	this.router.navigate(["/login"])
  }

}
