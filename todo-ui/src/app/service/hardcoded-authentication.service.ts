import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username , password){
    if (username === 'rhioda' && password === 'muthie') {
      return true;
    }
      return false;

  }
}
