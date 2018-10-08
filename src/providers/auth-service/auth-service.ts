import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
let apiUrl = 'http://youraddresshere/api.php';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, type){

    return new Promise((resolve, reject) =>{
      this.http.post(apiUrl+'?type='+type, JSON.stringify({username: credentials.username, password: credentials.password})).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });

    });

  }

}
