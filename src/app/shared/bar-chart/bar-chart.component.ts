import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

    @Input() chartText;
    @Input() ChartLabel;
    @Input() ChartType;
    @Input() ChartStack;
    @Input() ChartData;
    barChartOptions:any;
    barChartLabels:string[];
    barChartType:string;
    barChartLegend:boolean;
    barChartData:any[];

    public constructor() { }

    public ngOnInit() {
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: this.ChartStack
                }],
                yAxes: [{
                    stacked: this.ChartStack
                }],
                ticks: {
                    beginAtZero: true,
                },
            },
            legend: {
                labels: {
                    boxWidth: 20
                },
                position: 'bottom'
            },
            title: {
                display: true,
                text: this.chartText
            }
        };

        this.barChartLabels = this.ChartLabel;
        this.barChartType = this.ChartType;
        this.barChartLegend = true;

        this.barChartData = this.ChartData;
    }

    public chartClicked(e:any):void {}

    public chartHovered(e:any):void {}

}
