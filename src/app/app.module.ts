// Modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClickOutsideModule } from 'ng-click-outside';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';

import { MatMenuModule, MatDividerModule } from '@angular/material';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

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
import { ErrorComponent } from './pages/error/error.component';
import { RegisterComponent } from './pages/home/register/register.component';
import { FirebaseService } from './services/firebase.service';
import { SigninComponent } from './firebase-auth/signin/signin.component';
import { SignupComponent } from './firebase-auth/signup/signup.component';
import { ForgotComponent } from './firebase-auth/forgot/forgot.component';
import { environment } from 'src/environments/environment';

import { DaterangeComponent } from './pages/home/register/daterange/daterange.component';
import { SpeakerDetailsComponent } from './pages/home/register/speaker-details/speaker-details.component';
import { ContactDetailsComponent } from './pages/home/register/contact-details/contact-details.component';
import { SessionDetailsComponent } from './pages/home/register/session-details/session-details.component';
import { AttendDetailsComponent } from './pages/home/register/attend-details/attend-details.component';
import { HowWorksComponent } from './pages/home/how-works/how-works.component';
import { NumberStoryComponent } from './pages/home/number-story/number-story.component';
import { JoinTeamComponent } from './pages/home/join-team/join-team.component';
import { FaqComponent } from './pages/home/faq/faq.component';
import { EntryComponent } from './firebase-auth/entry/entry.component';
import { RegisterSpeakerComponent } from './pages/home/register/register-speaker/register-speaker.component';
import { RegisterParticipantComponent } from './pages/home/register/register-participant/register-participant.component';
import { SessionSelectComponent } from './pages/home/register/session-select/session-select.component';
import { SliderComponent } from './pages/home/slider/slider.component';



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
    SigninComponent,
    SignupComponent,
    ForgotComponent,
    DaterangeComponent,
    SpeakerDetailsComponent,
    ContactDetailsComponent,
    SessionDetailsComponent,
    AttendDetailsComponent,
    HowWorksComponent,
    NumberStoryComponent,
    JoinTeamComponent,
    FaqComponent,
    EntryComponent,
    RegisterSpeakerComponent,
    RegisterParticipantComponent,
    SessionSelectComponent,
    SliderComponent
  ],


  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GridModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,

    ClickOutsideModule,
    SlickCarouselModule,

    PDFModule,
    ExcelModule,
    InputsModule,
    ExcelExportModule,
    PDFExportModule,

    MatMenuModule,
    MatDividerModule,

    IntlModule,
    DateInputsModule,
    LabelModule,

    // MatDatepickerModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatNativeDateModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule

  ],
  providers: [
    FirebaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
