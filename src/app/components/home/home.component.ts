import { Component, OnInit } from '@angular/core';
import { ActionType } from '../../models/action-type.enum';
import { TextKeys } from '../../utils/text-keys';

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
    public targetId: any;
    public actionType: ActionType;
    public performanceYear = '2017';

    public defaultTargetData = {};

    public barChartType:string = 'bar';

    public barChartLabels: string[] = [];
    public revenueBarChartData: any = [];
    public revenueBarChartText: string = TextKeys.revenueGraphTitle;

    public profitBarChartData: any = [];
    public profitBarChartText: string = TextKeys.profitGraphTitle;

    public textKeys = TextKeys;
    public constructor(private targetService: TargetService) { }

    public ngOnInit() {
        this.getDefaultTargetInfo();
    }

    private prepareDataForCharts() {
        let revenueData = [];
        let profitData = [];
        this.barChartLabels = [];
        this.revenueBarChartData = [];
        this.profitBarChartData = [];
        this.targetList.forEach(elem => {
            this.barChartLabels.push(elem.name);

            elem['financialPerformance'].revenue.forEach(e => {
                if (e.year === this.performanceYear) {
                    revenueData.push(e.value);
                }
            });

            elem['financialPerformance'].profit.forEach(e => {
                if (e.year === this.performanceYear) {
                    profitData.push(e.value);
                }
            });
        });
        this.revenueBarChartData.push({ data: revenueData, label: 'Revenue (in cr)' });
        this.profitBarChartData.push({ data: profitData, label: 'Profit (in cr)' });
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

    private getTargetDataWhileEdit(data) {
        this.defaultTargetData = {
            targetName: data.name,
            targetStatus: data.status,
            targetInfo: data.info,
            keyContactName: data.keyContacts.name,
            keyContactEmail: data.keyContacts.email,
            revenue_2017: data.financialPerformance.revenue[0].value,
            revenue_2016: data.financialPerformance.revenue[1].value,
            revenue_2015: data.financialPerformance.revenue[2].value,
            profit_2017: data.financialPerformance.profit[0].value,
            profit_2016: data.financialPerformance.profit[1].value,
            profit_2015: data.financialPerformance.profit[2].value
        }
    }

    private getDefaultTargetInfo() {
        this.targetService.getDefaultTargetInfo()
            .subscribe(res => {
                this.targetList = res;
                this.prepareDataForCharts();
            });
    }

    public onChangePerfYear() {
        this.prepareDataForCharts();
    }

    public onCreateNewTarget() {
        this.targetModalHeader = TextKeys.addTargetHeader;
        this.actionType = ActionType.Add;
        this.getDefaultTargetData();
        this.targetModal = true;
    }

    public onCloseTargetModal(e) {
        this.targetModal = false;
    }

    public onAddNewTarget(data) {
        if (this.actionType === ActionType.Add) {
            this.targetService.addToTargetInfo(data)
                .subscribe(res => {
                    this.targetList = res;
                    this.prepareDataForCharts();
                    this.targetModal = false;
                });
        } else {
            this.targetService.updateTargetInfo(data, this.targetId)
                .subscribe(res => {
                    this.targetList = res;
                    this.prepareDataForCharts();
                    this.targetModal = false;
                });
        }
    }

    public onEditTarget(id) {
        const target = this.targetList.filter(elem => elem.id === id);
        this.targetId = id;
        this.getTargetDataWhileEdit(target[0]);
        this.actionType = ActionType.Update;
        this.targetModalHeader = TextKeys.updateTargetHeader;
        this.targetModal = true;
    }

    public onDeleteTarget(id) {
        this.actionType = ActionType.Delete;
        this.targetId = id;
        this.targetModalHeader = TextKeys.deleteTargetConfirmation;
        this.targetModal = true;
    }

    public onDeleteCompany(id) {
        this.targetService.deleteTargetInfo(this.targetId)
            .subscribe(res => {
                this.targetList = res;
                this.prepareDataForCharts();
                this.targetModal = false;
            });
    }

}
