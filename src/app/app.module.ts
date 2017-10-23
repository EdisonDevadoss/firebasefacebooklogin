import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Facebook } from '@ionic-native/facebook';
import * as firebase from 'firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const firebaseConfig = {
  apiKey: "AIzaSyAOjn6dyYXHL8jo8FB3IOy1DyO178ZgKeo",
  authDomain: "facebookauth-787d0.firebaseapp.com",
  databaseURL: "https://facebookauth-787d0.firebaseio.com",
  projectId: "facebookauth-787d0",
  storageBucket: "facebookauth-787d0.appspot.com",
  messagingSenderId: "806510472483"
}
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
