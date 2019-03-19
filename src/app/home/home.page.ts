import { Component, OnInit } from '@angular/core';
import { IonicTimepickerModalComponent } from '@logisticinfotech/ionic-timepicker';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})

export class HomePage implements OnInit {

    mytime = '';
    selectedTime;
    timePickerObjPtBr: any = {};
    timePickerObj: any = {};

    constructor(public modalCtrl: ModalController) { }

    ngOnInit() {

        // EXAMPLE OBJECT
        this.timePickerObj = {
            inputTime: '11:01 PM', // for 12 hour time in timePicker
            timeFormat: 'hh:mm A',
            titleLabel: 'Select a Time', // default 'Time'
            momentLocale: 'pt-BR'
        };

        this.timePickerObjPtBr = {
            timeFormat: 'hh:mm A',
            closeOnSelect: true,
            setLabel: 'Hoje',
            todayLabel: 'Hoje',
            closeLabel: 'Fechar',
            titleLabel: 'Selecione uma Time',
            clearButton: false,
            momentLocale: 'pt-BR'
        };
    }

    onChangeTime() {
        console.log('onChangeTime time ', this.mytime);
    }

    async openTimePicker() {
        console.log('Open Time PIcker');

        const modalCtrl = await this.modalCtrl.create({
            component: IonicTimepickerModalComponent,
            cssClass: 'li-ionic-timepicker',
            componentProps: { objConfig: this.timePickerObjPtBr }
        });
        await modalCtrl.present();

        modalCtrl.onDidDismiss().then(data => {
            if (data.data) {
                this.selectedTime = data.data.time;
            }
        });
    }
}
