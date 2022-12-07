import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  mail=""
  password=""

  constructor(private route:Router){}

  readValues=()=>
  {
    let data:any={"mail":this.mail,"password":this.password}
    
    if(this.mail=="gokul@mail" && this.password=="gok123")
    {
      this.route.navigate(['/#'])
    }else
    {
      alert("Invalid User")
      this.mail=""
      this.password=""
    }
  }

}
