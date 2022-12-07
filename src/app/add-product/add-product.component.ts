import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  name=""
  category=""
  description=""
  price=""

  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"name":this.name,"category":this.category,"description":this.description,"price":this.price}
    console.log(data)
    this.api.addProduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        alert("Product Added")
        this.name=""
        this.category=""
        this.description=""
        this.price=""
      }
    )
  }


}
