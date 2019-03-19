import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.page.html',
    styleUrls: ['./reactive-form.page.scss'],
})
export class ReactiveFormPage implements OnInit {

    time;
    dataForm: FormGroup;
    timePickerObj: any = {};

    constructor(
        public formBuilder: FormBuilder
    ) {
        this.dataForm = formBuilder.group({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            time: new FormControl('', [Validators.required]),
        });
    }

    ngOnInit() {

        this.timePickerObj = {
            timeFormat: 'hh:mm A', // default 'hh:mm A'
            btnProperties: {
                expand: 'block', // "block" | "full" (deafault 'block')
                fill: '', // "clear" | "default" | "outline" | "solid"
                // (deafault 'solid')
                size: '', // "default" | "large" | "small" (deafault 'default')
                disabled: '', // boolean (default false)
                strong: '', // boolean (default false)
                color: ''
                // "primary", "secondary", "tertiary", "success",
                // "warning", "danger", "light", "medium", "dark" ,
                // and give color in string (default 'primary')
            }
        };
    }

    onChangeTime() {
        console.log('onChangeTime time ', this.dataForm.get('time').value);
    }

    onClickSubmit() {
        console.log('onClickSubmit', this.dataForm.value);
    }
}
