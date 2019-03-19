import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-timepicker-directive',
    templateUrl: './timepicker-directive.page.html',
    styleUrls: ['./timepicker-directive.page.scss']
})

export class TimepickerDirectivePage implements OnInit {

    mytime1;
    mytime2 = '';
    timePickerObj: any = {};

    constructor(private el: ElementRef) { }

    ngOnInit() {

        // EXAMPLE OBJECT
        this.timePickerObj = {
            titleLabel: 'Select a Time',
            btnProperties: {
                expand: 'block', // 'block' | 'full'
                fill: '', // 'clear' | 'default' | 'outline' | 'solid'
                size: '', // 'default' | 'large' | 'small'
                disabled: '', // boolean (default false)
                strong: '', // boolean (default false)
                color: ''
                // 'primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark' , and give color in string
            }
        };
    }
}
