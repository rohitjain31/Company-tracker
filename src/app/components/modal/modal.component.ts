import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActionType } from '../../models/action-type.enum';
import { TextKeys } from '../../utils/text-keys';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    @Output() public addNewTarget = new EventEmitter<any>();
    @Output() public closeTargetModal = new EventEmitter<any>();
    @Output() public deleteTarget = new EventEmitter<string>();

    @Input() public targetModal;
    @Input() public targetModalHeader;
    @Input() public targetData;
    @Input() public targetId;
    @Input() public actionType: ActionType;

    public constructor() { }

    public ngOnInit() {}

    public onCloseTargetModal() {
        this.closeTargetModal.emit();
    }

    public get actionTitle(): string {
        switch (this.actionType) {
            case ActionType.Add:
                return TextKeys.add;
            case ActionType.Update:
                return TextKeys.update;
            case ActionType.Delete:
                return TextKeys.delete;
            default:
                return '';
        }
    }

    public getDeleteModal() {
        return this.actionType === ActionType.Delete ? true : false;
    }

    public onAddTarget() {
        const id = this.actionType === ActionType.Add ? Date.now() : this.targetId;
        const data = {
            id: id,
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

    public onDeleteTarget() {
        this.deleteTarget.emit(this.targetId);
    }

}
