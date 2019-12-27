import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import {Router} from '@angular/router'
@Component({
  selector: 'app-homes',
  templateUrl: './homes.page.html',
  styleUrls: ['./homes.page.scss'],
})
export class HomesPage implements OnInit {
  his:any;
  data:any;
  loaderToShow: any;

  constructor( private menu: MenuController, public loadingController: LoadingController,private router:Router) { }
  
  ngOnInit() {
    this.his=history.state['data'];
    this.data=this.his['re'];
   /* if(this.data['role']=='client'){
      this.router.navigate(["/homes/clientHome"])
    }
    if(this.data['role']=='manager'){
      this.router.navigate(["/homes/home"])
    }*/
    this.presentLoadingWithOptions(this.data['role'])
    
  }
  async presentLoadingWithOptions(role) {
    const loading = await this.loadingController.create({
      duration: 4000,
      message: 'Wait please...',
      translucent: true,
      showBackdrop:true,
    }).then((res)=>{
      res.present();
      res.onDidDismiss().then((dis)=>{
        if(role=='client'){
          this.router.navigate(["/homes/clientHome"])
          res.dismiss()
        }
        if(role=='manager'){
          this.router.navigate(["/homes/home"])
          res.dismiss()
        }

      })
    });
  }

}
