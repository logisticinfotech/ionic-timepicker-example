import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicTimepickerModalComponent } from '@logisticinfotech/ionic-timepicker';

@Component({
    selector: 'app-timepicker-button',
    templateUrl: './timepicker-button.page.html',
    styleUrls: ['./timepicker-button.page.scss']
})
export class TimepickerButtonPage implements OnInit {
    timePickerObj: any = {};
    selectedTime;


    constructor(public modalCtrl: ModalController) { }

    ngOnInit() {

        this.timePickerObj = {
            timeFormat: 'hh:mm A', // default 'hh:mm A'
            btnProperties: {
                expand: 'block', // "block" | "full" (deafault 'block')
                fill: '', // "clear" | "default" | "outline" | "solid" // (deafault 'solid')
                size: '', // "default" | "large" | "small" (deafault 'default')
                disabled: '', // boolean (default false)
                strong: '', // boolean (default false)
                color: ''
            }
        };
    }
    async openTimePicker() {

        const timePickerModal = await this.modalCtrl.create({
            component: IonicTimepickerModalComponent,
            cssClass: 'li-ionic-timepicker',
            componentProps: { objConfig: this.timePickerObj }
        });
        await timePickerModal.present();

        timePickerModal.onDidDismiss().then(data => {
            // this.isModalOpen = false;
            console.log(data);
            if (data.data) {
                this.selectedTime = data.data.time;
            }
        });
    }
}
