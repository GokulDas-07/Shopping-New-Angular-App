import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-view-product',
  templateUrl: './user-view-product.component.html',
  styleUrls: ['./user-view-product.component.css']
})
export class UserViewProductComponent {
  constructor(private api:ApiService){
    api.fetchProduct().subscribe(
      (response:any)=>{
        this.data=response;
      }
    )
  }
  data:any=[]

}
