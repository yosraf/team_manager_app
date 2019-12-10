import { Component, OnInit, Input } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
})
export class HomeContentComponent implements OnInit {
  @Input() data:string;
  constructor() { }
  
  ngOnInit() {}

}
