import { Component } from '@angular/core';
import {FormGroup,FormControl,FormControlName,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angularTraining';
  // LoginUser(data:string){
  //   console.warn(data)

  // }

  membersData= [
{name:"sai",email:'spvn81@gmail.com'},
{name:"pavan",email:'3@gmail.com'},
{name:"manoj",email:'1@gmail.com'},
{name:"Kumar",email:'2@gmail.com'}
]


  LoginForm= new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required ])
  })

  LoginUser(){
console.warn(this.LoginForm.value)
  }

get userInvalid(){
return this.LoginForm.get('user')
}

get PasswordInvalid(){
return this.LoginForm.get('password')
}

}
