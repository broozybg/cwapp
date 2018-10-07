import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Geolocation } from '@ionic-native/geolocation';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username = '';
  email = '';
  name: string = '';

  constructor(public navCtrl: NavController, public geolocation: Geolocation, private storage: Storage, private auth: AuthServiceProvider) {
    let info = this.auth.getUserInfo();
    if(info) {
      this.username = info['name'];
    this.email = info['email'];
    }
    

    this.geolocation.getCurrentPosition().then((resp) => {

      //storage.clear()
     let location = [ 
        { timestamp: resp.timestamp, lat: resp.coords.latitude, lng: resp.coords.longitude }
      ];
      let usersStringifiedObj = JSON.stringify(location);
      this.storage.set("users", usersStringifiedObj);

      this.getStorage();

     }).catch((error) => {
       console.log('Error getting location', error);
     });

     


     //storage.set('name', 'Viktor');

   // storage.ready().then(() => {
   // });
      // Or to get a key/value pair
      
  }

  getStorage() {

      this.storage.get("users").then( users => {
          console.log(JSON.parse(users))
      })
  
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
  }

}
