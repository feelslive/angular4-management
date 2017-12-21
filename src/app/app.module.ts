import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

/*引入表单*/
import { FormsModule } from '@angular/forms';
/*引入信息提示模块*/
import { FlashMessagesModule } from 'ngx-flash-messages';
/*引入登录firebase登录授权模块*/
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule,AngularFireAuth } from 'angularfire2/auth';
/*引入路由*/
import { RouterModule,Routes} from '@angular/router';
/*引入登录拦截模块*/
import { AuthGuard } from './guards/auth.guards';
import { RegisterGuard } from './guards/register.guards';

/*引入组件*/
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { DetailComponent } from './components/detail/detail.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { EdUsersComponent } from './components/ed-users/ed-users.component';
import { NavberComponent } from './components/navber/navber.component';
import { SideberComponent } from './components/sideber/sideber.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingComponent } from './components/setting/setting.component';
/*引入服务模块*/
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { SettingsService } from './services/settings.service';


/*定义路由*/
const approutes : Routes = [
  {path:"",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent,canActivate:[RegisterGuard]},
  {path:"adduser",component:AddUsersComponent,canActivate:[AuthGuard]},
  {path:"setting",component:SettingComponent,canActivate:[AuthGuard]},
  {path:"user/:id",component:DetailComponent,canActivate:[AuthGuard]},
  {path:"ed-user/:id",component:EdUsersComponent,canActivate:[AuthGuard]}
]


/*设置firebase数据库登录授权信息*/
/*以下信息在firebase创建项目即可获取*/
/*注册登录授权  必填信息*/
export const firebaseConfig = {
    apiKey: "<apiKey>",
    authDomain: "<authDomain>",
    databaseURL: "<databaseURL>",
    projectId: "<projectId>",
    storageBucket: "<storageBucket>",
    messagingSenderId: "<messagingSenderId>"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    DetailComponent,
    AddUsersComponent,
    EdUsersComponent,
    NavberComponent,
    SideberComponent,
    LoginComponent,
    RegisterComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule.forRoot(approutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    UserService,
    AuthService,
    SettingsService,
    AuthGuard,
    RegisterGuard,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
