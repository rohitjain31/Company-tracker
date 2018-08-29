import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    @Output() public closeTargetModal = new EventEmitter<any>();
    @Input() public targetModal;
    @Input() public targetModalHeader;

    public perfCountArray = [1];
    public financialData = [];

    public constructor() { }

    public ngOnInit() {}

    public onCloseTargetModal() {
        this.closeTargetModal.emit();
    }

    public onAddfinancialReport() {
        const val = this.perfCountArray[this.perfCountArray.length - 1];
        this.perfCountArray.push(val);
    }

    public onRemovefinancialReport(index) {
        console.log(index);
        this.perfCountArray.splice(index, 1);
    }

}
