import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-timepicker-component',
    templateUrl: './timepicker-component.page.html',
    styleUrls: ['./timepicker-component.page.scss']
})
export class TimepickerComponentPage implements OnInit {
    mytime1 = '11:01 PM';
    mytime2;
    mytime3 = '';
    timePickerObj: any = {};

    constructor() { }

    ngOnInit() {

        // EXAMPLE OBJECT
        this.timePickerObj = {
            titleLabel: 'Select a Time', // default 'Time'

            btnProperties: {
                expand: 'block', // "block" | "full" (deafault 'block')
                fill: '', // 'clear' | 'default' | 'outline' | 'solid'
                size: '', // 'default' | 'large' | 'small'
                disabled: '', // boolean (default false)
                strong: '', // boolean (default false)
                color: ''
                // "primary", "secondary", "tertiary", "success",
                // "warning", "danger", "light", "medium", "dark" ,
                // and give color in string (default 'primary')
            }
        };
    }
}
