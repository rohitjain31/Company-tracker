import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-target-list',
  templateUrl: './target-list.component.html',
  styleUrls: ['./target-list.component.css']
})
export class TargetListComponent implements OnInit {

    @Input() public target: any = [];
    public revenueBarChartLabels: string[] = [];
    public revenueBarChartData: any = [];
    public revenueBarChartText: string = 'Revenue Analysis';

    public profitBarChartLabels: string[] = [];
    public profitBarChartData: any = [];
    public profitBarChartText: string = 'Profit Analysis';

    public barChartType:string = 'bar';

    public constructor() { }

    public ngOnInit() {
        this.buildRevenueChartData();
        this.buildProfitChartData();
    }

    private buildRevenueChartData() {
        let data = [];
        this.target['financialPerformance'].revenue.forEach(elem => {
            this.revenueBarChartLabels.push(elem.year);
            data.push(elem.value);
        });
        this.revenueBarChartData.push({ data: data, label: 'Revenue (in cr)' });
    }

    private buildProfitChartData() {
        let data = [];
        this.target['financialPerformance'].profit.forEach(elem => {
            this.profitBarChartLabels.push(elem.year);
            data.push(elem.value);
        });
        this.profitBarChartData.push({ data: data, label: 'Profit (in cr)' });
    }

}
