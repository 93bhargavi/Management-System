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
submitted:any;
 

constructor(private api:ApiService, private route:Router){}

submit()
{
   
    var enc=this.api.encrypt ({username:this.username,password:this.password})
    console.log(enc);     
    // this.submitted=true;
     
    // this.route.navigate(['/profile']);
    
       
}

}
