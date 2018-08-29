import { Component, OnInit } from '@angular/core';

import { TargetService } from '../../services/target.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public targetList = [];
    public targetModal: boolean = false;
    public targetModalHeader: string;
    public barChartLabels: string[];
    public chartData: any;

    public constructor(private targetService: TargetService) { }

    public ngOnInit() {
        this.getDefaultTargetInfo();
    }

    private prepareDataForCharts() {

    }

    private getDefaultTargetInfo() {
        this.targetService.getDefaultTargetInfo()
            .subscribe(res => {
                this.targetList = res;
                this.prepareDataForCharts();
            });
    }

    public onCreateNewTarget() {
        this.targetModalHeader = 'Add Target Company';
        this.targetModal = true;
    }

    public onCloseTargetModal() {
        this.targetModal = false;
    }

}
