import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

    @Input() pieChartLabels;
    @Input() pieChartData;
    public pieChartType = 'pie';
    pieChartOption = {
        legend: {
            labels: {
                boxWidth: 20
            },
            position: 'right'
        },
        responsive: true
    }

  public constructor() { }

  public ngOnInit() {
  }

  public chartClicked(e:any):void {}

  public chartHovered(e:any):void {}

}
