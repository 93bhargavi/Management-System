// command to create service file:ng g s api(servicefile name)
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //function for decrypting json data which return decrypted or original data of backend
  decrypt_bk(res: any) {
    var str_dcr = String(res);
    var org_enc = str_dcr.substring(10);
    var org_data = atob(org_enc);
    return JSON.parse(org_data)
  }
  encrypt(res: any) {
    var str_enc = JSON.stringify(res);
    var enc = btoa(str_enc);
    var enc_jsn = { ecb: enc };
    return enc_jsn;
  }


  baseurl: any = "https://bzadevops.co.in/GMS/api"
  constructor(private httpclient: HttpClient) { }

  log(data: any) {
    return this.httpclient.post(this.baseurl + '/login', data)
  }
}
