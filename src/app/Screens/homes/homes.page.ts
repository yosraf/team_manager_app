import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.page.html',
  styleUrls: ['./homes.page.scss'],
})
export class HomesPage implements OnInit {
  his:any;
  data:any;
  constructor( private menu: MenuController) { }
  
  ngOnInit() {
   // this.his=history.state['data'];
    //this.data=this.his['re'];
  }

}
