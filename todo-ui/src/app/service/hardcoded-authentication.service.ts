import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username , password){
    // console.log('before auth :' + this.isUserLoggedIn());
    if (username === 'rhioda' && password === 'muthie') {
      sessionStorage.setItem('authenticatedUser' , username);
      // console.log('after auth :' + this.isUserLoggedIn());
      return true;
    }
      return false;

  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }

}
