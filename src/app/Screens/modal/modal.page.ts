import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() data:string;
  title:string;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    if( this.data=="project"){
      this.title="Create new project";
    }
    else{
      this.title="Create new task";
    }
  }
  dismiss(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
