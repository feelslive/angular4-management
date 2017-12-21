import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import { Router} from '@angular/router';
import { Settings } from '../../models/setting';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  settings:Settings;
  constructor(
  	public settingsservice:SettingsService,
  	public router: Router,
  	public flashMessagesService: FlashMessagesService
  	) { }

  ngOnInit() {
  	this.settings = this.settingsservice.getSettings();
  }
  onSubmit() {
  	this.settingsservice.changeSettings(this.settings);
  	this.flashMessagesService.show('设置成功', {
		classes: ['alert', 'alert-success'],
		timeout: 3000, 
	});
	this.router.navigate(["/setting"])
  }

}
