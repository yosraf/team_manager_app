import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  data:any;


  constructor() { }

  ngOnInit() {
    this.data={
      "img":null,
      "name":"yosra fatnassi",
      "position":"manager",
      "email":"yosrafatnassi@gmail.com",
      "password":"00000",
      "phone":"58784044"
    }
   
  }
 

}
