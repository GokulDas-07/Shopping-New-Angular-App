import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  name=""
  address=""
  phone=""
  mail=""
  password=""
  confirm=""

  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"name":this.name,"address":this.address,"phone":this.phone,"mail":this.mail,"password":this.password,"confirm":this.confirm}
    console.log(data)
    /*this.api.userRegistration(data).subscribe(
      (response:any)=>{
        console.log(response) */
    
    if(this.password==this.confirm){
      alert("User Registered")
      this.name=""
      this.address=""
      this.phone=""
      this.mail=""
      this.password=""
      this.confirm=""
    }else{
      alert("Password and Confirm password doesn't match")
    }
  }
   // )
  }
//}


