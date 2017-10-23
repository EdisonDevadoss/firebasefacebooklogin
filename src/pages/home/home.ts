import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Facebook } from '@ionic-native/facebook';
import * as firebase from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, private facebook: Facebook) {

  }
  fblogin(){
    this.facebook.login(['email'])
    .then((res)=>{
      const fc = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
      firebase.auth().signInWithCredential(fc)
      .then((fs)=>{
        alert("firebase success");
      })
      .catch((ferror)=>{
        alert("firebase error");
      })
    })
    .catch((err)=>{
      alert(JSON.stringify(err));
    })
  }
  loginWithGoogle(){
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((res)=>{
      console.log("From----Google---");
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  logout(){
    firebase.auth().signOut()
    .then((res)=>{
      console.log("Logout Success", res);
    })
    .catch((err)=>{
      console.log('Logout fail', err);
    })
  }

}
