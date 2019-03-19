import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Reactive Form',
      url: '/reactive-form',
      icon: 'book'
    },
    {
      title: 'Template Driven Form',
      url: '/template-driven-form',
      icon: 'bicycle'
    },
    {
      title: 'Timepicker(Using Component)',
      url: '/timepicker-component',
      icon: 'alarm'
    },
    {
      title: 'Timepicker(Using Directive)',
      url: '/timepicker-directive',
      icon: 'briefcase'
    },
    {
      title: 'Timepicker(Using Button)',
      url: '/timepicker-button',
      icon: 'locate'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
