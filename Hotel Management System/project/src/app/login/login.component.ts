import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
username:any;
password:any;

constructor(private api:ApiService, private route:Router){}


submit(){

  
  
}

}
