import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { SliderComponent } from './slider/slider.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetilsComponent } from './product-detils/product-detils.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { ToastrModule } from 'ngx-toastr';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { MyHttpInterceptor } from './my-http.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './loading.interceptor';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AllorderComponent } from './allorder/allorder.component';
import { MyproductComponent } from './myproduct/myproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,
    FooterComponent,
    LoginComponent,
    CartComponent,
    SliderComponent,
    BrandsComponent,
    CategoriesComponent,
    RegisterComponent,
    ProductDetilsComponent,
    SeemorePipe,
    SearchPipe,
    CheckoutComponent,
    ForgetPasswordComponent,
    WishlistComponent,
    AllorderComponent,
    MyproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule ,
    ToastrModule.forRoot(),
    NgxSpinnerModule


  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:MyHttpInterceptor,multi:true},
 {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
