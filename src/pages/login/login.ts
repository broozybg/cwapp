import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading, IonicPage, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  responseData : any;
  userData = {"username":"", "password":""};

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider, private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController, private toastCtrl:ToastController) {
  }

  public createAccount() {
    this.navCtrl.push('RegisterPage');
  }
 
  login() {
    if(this.userData.username && this.userData.password){
     this.auth.postData(this.userData, "login").then((result) =>{
     this.responseData = result;
       if(this.responseData.username){
        localStorage.setItem('userData', JSON.stringify(this.responseData) )
        this.navCtrl.setRoot("HomePage");
       }
       else {
         this.presentToast("Please give valid username and password");
       }
     }, (err) => {
       //Connection failed message
     });
    }
    else{
     this.presentToast("Please insert credentials!");
    }

 }

 presentToast(msg) {
   let toast = this.toastCtrl.create({
     message: msg,
     position: 'top',
     duration: 2000
   });
   toast.present();
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
