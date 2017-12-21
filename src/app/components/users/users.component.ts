import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	users:any[];
  total:number;
  constructor(
  	public UserService:UserService
  	) { }

  ngOnInit() {
  	this.UserService.getUsers().subscribe(users=>{
  		this.users = users;
      this.gettotal();

  	})
  }
  gettotal(){
    let tot = 0;
    for(let i=0;i<this.users.length;i++){
          tot+= parseFloat(this.users[i].age) 
    }
    this.total = tot;
  }

}
