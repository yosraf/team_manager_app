import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import {ProjectsService} from '../../Services/projects.service';
import {Proposition} from '../../Models/Proposition';
import { from } from 'rxjs';
@Component({
  selector: 'app-proposition-details',
  templateUrl: './proposition-details.page.html',
  styleUrls: ['./proposition-details.page.scss'],
})
export class PropositionDetailsPage implements OnInit {
  id:any;
  details:any=new Proposition();
  constructor(private route: ActivatedRoute,private router:Router,private service:ProjectsService) {
    this.route.params.subscribe( params => {
      console.log(params["id"])
      this.id=params["id"]
  } );
   }

  ngOnInit() {
    this.service.getPropositionDetail(this.id).then(
      (res)=>{
       this.details=res;
       console.log(this.details)
      }
    )
  }

}
