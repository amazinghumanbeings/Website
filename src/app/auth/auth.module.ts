import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotComponent } from './components/forgot/forgot.component';

@NgModule({
  declarations: [
    SigninComponent, 
    SignupComponent, 
    ForgotComponent
  ],
  
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  
  exports: [
    SigninComponent, 
    SignupComponent, 
    ForgotComponent
  ]
})
export class AuthModule { }
