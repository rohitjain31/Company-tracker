import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TextKeys } from '../../utils/text-keys';

@Component({
  selector: 'app-target-list',
  templateUrl: './target-list.component.html',
  styleUrls: ['./target-list.component.css']
})
export class TargetListComponent implements OnInit {

    @Input() public target: any = [];
    @Output() public editClicked = new EventEmitter<any>();
    @Output() public deleteClicked = new EventEmitter<any>();

    public revenueBarChartLabels: string[] = [];
    public revenueBarChartData: any = [];
    public revenueBarChartText = TextKeys.revenueGraphTitle;

    public profitBarChartLabels: string[] = [];
    public profitBarChartData: any = [];
    public profitBarChartText = TextKeys.profitGraphTitle;

    public barChartType = 'bar';

    public textKeys = TextKeys;
    public constructor() { }

    public ngOnInit() {
        this.buildRevenueChartData();
        this.buildProfitChartData();
    }

    private buildRevenueChartData() {
        const data = [];
        this.target['financialPerformance'].revenue.forEach(elem => {
            this.revenueBarChartLabels.push(elem.year);
            data.push(elem.value);
        });
        this.revenueBarChartData.push({ data: data, label: 'Revenue (in cr)' });
    }

    private buildProfitChartData() {
        const data = [];
        this.target['financialPerformance'].profit.forEach(elem => {
            this.profitBarChartLabels.push(elem.year);
            data.push(elem.value);
        });
        this.profitBarChartData.push({ data: data, label: 'Profit (in cr)' });
    }

    public onEditTarget(id) {
        this.editClicked.emit(id);
    }

    public onDeleteTarget(id) {
        this.deleteClicked.emit(id);
    }

}
