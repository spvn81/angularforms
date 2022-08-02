import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  users(){
    return [
      {name:'sai',email:'sp81@gmail.com'},
      {name:'Pavan',email:'rr@gmail.com'},
      {name:'nanai',email:'ff@gmail.com'},
      {name:'na',email:'yy@gmail.com'},

    ]
  }

}
