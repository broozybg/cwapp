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
$ ionic cordova plugin add cordova-plugin-camera --save <br />
$ ionic cordova plugin add cordova-plugin-file --save <br />
$ ionic cordova plugin add cordova-plugin-file-transfer --save <br />
$ ionic cordova plugin add cordova-plugin-filepath --save <br />

app.module

import { File } from '@ionic-native/file'; <br />
import { Transfer } from '@ionic-native/transfer'; <br />
import { FilePath } from '@ionic-native/file-path'; <br />
import { Camera } from '@ionic-native/camera'; <br />

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
