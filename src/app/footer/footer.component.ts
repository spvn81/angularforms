import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  membersData= [
    {name:"sai",email:'spvn81@gmail.com'},
    {name:"pavan",email:'3@gmail.com'},
    {name:"manoj",email:'1@gmail.com'},
    {name:"Kumar",email:'2@gmail.com'}
    ]

}
