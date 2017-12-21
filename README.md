# Manblog

## 使用anguler cli脚手架 + bootstrap

## 使用json-serve服务 请求本地文件增删改

## 使用firebase实现注册登录退出功能(需要科学上网)

## (简单的后台管理系统)主要实现的功能：

### 1.注册
### 2.登录
### 3.退出
### 4.增加信息
### 5.修改信息
### 6.删除信息
### 7.设置是否可修改


脚手架版本：[Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

### 安装项目依赖 cd manblog `npm install`  
### 安装服务依赖 cd jsonserve `npm install`  


### 启动项目 `ng serve`   http://localhost:4200/

### 启动json-serve本地服务 `npm run v`    http://localhost:3000
### 数据文件在 jsonserve -> db.json


### 启动后 要实现注册登录授权  必填信息在  
app.module.ts -->  firebaseConfig { "在firebase创建项目即可获取" }



## Code scaffolding
## 创建组件 `ng generate component component-name`   简写：ng g c 'name'

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
## 打包  `ng build`
## 打包完成后，运行打包文件，报错404，js，css未找到。
## 解决办法：修改index.html中的`<base href='/'>,改成<base href='./'>`

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
