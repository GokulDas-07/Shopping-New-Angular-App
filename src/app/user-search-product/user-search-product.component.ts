import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-search-product',
  templateUrl: './user-search-product.component.html',
  styleUrls: ['./user-search-product.component.css']
})
export class UserSearchProductComponent {
  name=""
  searchData:any=""

  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"name":this.name}
    console.log(data)
    this.api.searchProduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length==0){
          alert("No Product Found")
        }else{
          this.searchData=response
        }
      }
    )
  }


}
