import { Component } from '@angular/core';
import { Router } from  "@angular/router";
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }
  stats() {
    this.router.navigateByUrl('/statistic');
  }
  child() {
    this.router.navigateByUrl('/accueil');
  }
  homework() {
    this.router.navigateByUrl('/homework');
  }
  remarks() {
    this.router.navigateByUrl('/remarks');
  }
  exams() {
    this.router.navigateByUrl('/exams');
  }
  notes() {
    this.router.navigateByUrl('/notes');
  }
  logout() {
    this.router.navigateByUrl('/home');
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
