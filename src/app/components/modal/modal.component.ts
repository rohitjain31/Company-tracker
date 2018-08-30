import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    @Output() public addNewTarget = new EventEmitter<any>();
    @Output() public closeTargetModal = new EventEmitter<any>();
    @Input() public targetModal;
    @Input() public targetModalHeader;
    @Input() public targetData;

    public constructor() { }

    public ngOnInit() {}

    public onCloseTargetModal() {
        this.closeTargetModal.emit();
    }

    public onAddTarget() {
        const data = {
            name: this.targetData.targetName,
            status: this.targetData.targetStatus,
            info: this.targetData.targetInfo,
            keyContacts: {
                name: this.targetData.keyContactName,
                email: this.targetData.keyContactEmail
            },
            financialPerformance: {
                revenue: [
                    { year: '2017', value: this.targetData.revenue_2017 },
                    { year: '2016', value: this.targetData.revenue_2016 },
                    { year: '2015', value: this.targetData.revenue_2015 }
                ],
                profit: [
                    { year: '2016', value: this.targetData.profit_2017 },
                    { year: '2015', value: this.targetData.profit_2016 },
                    { year: '2014', value: this.targetData.profit_2015 }
                ]
            }
        };

        this.addNewTarget.emit(data);
    }

}
