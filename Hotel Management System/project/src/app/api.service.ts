// command to create service file:ng g s api(servicefile name)
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl:any="https://bzadevops.co.in/GMS/api"
  constructor(private httpclient:HttpClient) { }

  log(data:any)
  {
    return this.httpclient.post(this.baseurl+'/login',data)
  }
}
