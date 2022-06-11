import { Component } from '@angular/core';
import {FormGroup,FormControl,FormControlName} from '@angular/forms';

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


  LoginForm= new FormGroup({
    user:new FormControl(''),
    password:new FormControl('')
  })

  LoginUser(){
console.warn(this.LoginForm.value)
  }
}
