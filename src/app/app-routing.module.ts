import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {path:"",component:AdminLoginComponent},
  {path:"addproduct",component:AddProductComponent},
  {path:"viewproduct",component:ViewProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
