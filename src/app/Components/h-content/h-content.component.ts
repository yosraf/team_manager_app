import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-h-content',
  templateUrl: './h-content.component.html',
  styleUrls: ['./h-content.component.scss'],
})
export class HContentComponent implements OnInit {
  @ViewChild('barChart',{static: false}) barChart;
  @ViewChild('dognutChart',{static: false}) dognutChart;
  /*@Input() role:string;
  @Input() uid:string;*/

  bars: any;
  dognut:any;
  colorArray: any;
  constructor() { }

  ngOnInit() {

  }
  ionViewDidEnter() {
    this.createBarChart();
    this.createDonutsChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['To do', 'In progress', 'Done'],
        datasets: [{
          label: 'Projects progression',
          data: [3,2,1],
          backgroundColor: 'rgba(0, 0, 0,0)', // array should have same number of elements as number of dataset
          borderColor: '#ff7300',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  createDonutsChart() {
    this.dognut = new Chart(this.dognutChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['mobile', 'web', 'data'],
        datasets: [{
          label: 'Projects types',
          data: [3,2,1],
          backgroundColor: ['#e67e22','#a55eea','#8e44ad'], // array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
