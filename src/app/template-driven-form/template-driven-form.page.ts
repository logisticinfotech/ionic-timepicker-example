import { Component, OnInit } from '@angular/core';

export class MyTemplateDriverForm {
    public name: string;
    public email: string;
    public time: string;
}

@Component({
    selector: 'app-template-driven-form',
    templateUrl: './template-driven-form.page.html',
    styleUrls: ['./template-driven-form.page.scss']
})
export class TemplateDrivenFormPage implements OnInit {

    mytime = '';
    time;
    timePickerObj: any = {};
    myTemplateDriverForm: MyTemplateDriverForm;

    constructor() {
        this.myTemplateDriverForm = new MyTemplateDriverForm();
        this.myTemplateDriverForm.time = '12:15 PM';
    }

    ngOnInit() {

        // EXAMPLE OBJECT
        this.timePickerObj = {
            inputTime: '12:15 PM', // If you want to set time in time-picker

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

    onClickSubmit() {
        console.log('onClickSubmit', this.myTemplateDriverForm);
    }
}
