# cwapp


****** GEOLOCATION PLUGIN ******

https://ionicframework.com/docs/native/geolocation/

$ ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="To locate you"
$ npm install --save @ionic-native/geolocation


****** STORAGE ******

https://ionicframework.com/docs/storage/

$ ionic cordova plugin add cordova-sqlite-storage
$ npm install --save @ionic/storage


****** CAMERA + FILE STORAGE ******

$ npm install --save @ionic-native/camera @ionic-native/file @ionic-native/file-path @ionic-native/transfer <br />
$ ionic cordova plugin add cordova-plugin-camera --save
$ ionic cordova plugin add cordova-plugin-file --save
$ ionic cordova plugin add cordova-plugin-file-transfer --save
$ ionic cordova plugin add cordova-plugin-filepath --save

app.module

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

providers: [
    StatusBar,
    SplashScreen,
    File,
    Transfer,
    Camera,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]

****** LOGIN ******

ionic g provider authService
ionic g page register
ionic g page login

app.module

import { AuthService } from './../providers/auth-service';

providers: [
    .
    .
    .
    AuthService
  ]



****** MP3 Player demo ******

https://market.ionicframework.com/starters/ionic-mp3-music-player
