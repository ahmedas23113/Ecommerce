import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { SliderComponent } from './slider/slider.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductDetilsComponent } from './product-detils/product-detils.component';
import { userserviceGuard } from './userservice.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AllorderComponent } from './allorder/allorder.component';
import { MyproductComponent } from './myproduct/myproduct.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomeComponent ,canActivate:[userserviceGuard]},
  {path:'brands', component:BrandsComponent,canActivate:[userserviceGuard]},
  {path:'productDetails/:id ', component:ProductDetilsComponent ,canActivate:[userserviceGuard]},
  {path:'cart', component:CartComponent ,canActivate:[userserviceGuard]},
  {path:'wishlist', component:WishlistComponent ,canActivate:[userserviceGuard]},
  {path:'myProduct', component:MyproductComponent ,canActivate:[userserviceGuard]},
  {path:'slider', component:SliderComponent ,canActivate:[userserviceGuard]},
  {path:'allorders', component:AllorderComponent ,canActivate:[userserviceGuard]},
  {path:'categories', component:CategoriesComponent ,canActivate:[userserviceGuard]},
  {path:'checkout/:cartId', component:CheckoutComponent ,canActivate:[userserviceGuard]},
  {path:'forgetPassword', component:ForgetPasswordComponent },
  {path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
