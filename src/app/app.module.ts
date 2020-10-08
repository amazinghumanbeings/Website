// Modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
// import { AngularFireModule } from '@angular/fire';

// Component
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SessionComponent } from './pages/session/session.component';
import { HeaderComponent } from './header/header.component';
import { InitiativeComponent } from './pages/initiative/initiative.component';
import { ViewSessionComponent } from './pages/session/view-session/view-session.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ViewProfileComponent } from './pages/profile/view-profile/view-profile.component';
import { Chart1Component } from './pages/profile/view-profile/chart1/chart1.component';
import { Chart2Component } from './pages/profile/view-profile/chart2/chart2.component';
import { DreamComponent } from './pages/dream/dream.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthModule } from './auth/auth.module';
import { ErrorComponent } from './pages/error/error.component';
import { RegisterComponent } from './pages/home/register/register.component';






@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    FooterComponent,
    OurStoryComponent,
    ContactUsComponent,
    SessionComponent,
    HeaderComponent,
    InitiativeComponent,
    ViewSessionComponent,
    ProfileComponent,
    ViewProfileComponent,
    Chart1Component,
    Chart2Component,
    DreamComponent,
    HomeComponent,
    ErrorComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    FormsModule,
    ReactiveFormsModule,
    PDFModule,
    ExcelModule,
    InputsModule,
    BrowserAnimationsModule,
    ExcelExportModule,
    PDFExportModule,
    // AngularFireModule.initializeApp({
    //   apiKey: "AIzaSyDXR1jXBNsBD71MtxZfxRp82Zrgmvx4Rmc",
    //   authDomain: "ahb-firebase-ng-auth.firebaseapp.com",
    //   databaseURL: "https://ahb-firebase-ng-auth.firebaseio.com",
    //   projectId: "ahb-firebase-ng-auth",
    //   storageBucket: "ahb-firebase-ng-auth.appspot.com",
    //   messagingSenderId: "177645311193",
    //   appId: "1:177645311193:web:3bff6951a381766d15dac8"
    // }),
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
