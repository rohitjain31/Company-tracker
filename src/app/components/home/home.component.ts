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

    public defaultTargetData = {};

    public constructor(private targetService: TargetService) { }

    public ngOnInit() {
        this.getDefaultTargetInfo();
    }

    private prepareDataForCharts() {

    }

    private getDefaultTargetData() {
        this.defaultTargetData = {
            targetName: '',
            targetStatus: 'researching',
            targetInfo: '',
            keyContactName: '',
            keyContactEmail: '',
            revenue_2017: 0,
            revenue_2016: 0,
            revenue_2015: 0,
            profit_2017: 0,
            profit_2016: 0,
            profit_2015: 0
        }
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
        this.getDefaultTargetData();
        this.targetModal = true;
    }

    public onCloseTargetModal(e) {
        this.targetModal = false;
    }

    public onAddNewTarget(data) {
        this.targetService.addToTargetInfo(data)
            .subscribe(res => {
                this.targetList = res;
                this.prepareDataForCharts();
                this.targetModal = false;
            });
    }

}
