import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserViewProductComponent } from './user-view-product/user-view-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {path:"",component:AdminLoginComponent},
  {path:"addproduct",component:AddProductComponent},
  {path:"viewproduct",component:ViewProductComponent},
  {path:"searchproduct",component:SearchProductComponent},
  {path:"userregistration",component:UserRegistrationComponent},
  {path:"userlogin",component:UserLoginComponent},
  {path:"userviewproduct",component:UserViewProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
