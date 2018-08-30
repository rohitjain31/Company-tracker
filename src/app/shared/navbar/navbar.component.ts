import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TextKeys } from '../../utils/text-keys';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    @Output() createNewTarget = new EventEmitter<any>();

    public textKeys = TextKeys;
    public constructor() { }

    public ngOnInit() {}

    public onCreateNewTarget() {
        this.createNewTarget.emit();
    }

}
