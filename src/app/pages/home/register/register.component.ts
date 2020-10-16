import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  template: boolean = false;
  sessionTemplate: boolean = false;
  attendTemplate: boolean = false;
  dateTemplate: boolean = false;
  speakerTemplate: boolean = false;
  contactTemplate: boolean = false;

  constructor() { }

  ngOnInit() {


  }

  showSessionTemplate() {
    this.template = true;
    this.sessionTemplate = true;
    this.attendTemplate = false;
    this.dateTemplate = false;
    this.speakerTemplate = false;
    this.contactTemplate = false;

  }

  showAttendTemplate() {
    this.template = true;
    this.attendTemplate = true;
    this.sessionTemplate = false;
    this.dateTemplate = false;
    this.speakerTemplate = false;
    this.contactTemplate = false;
  }

  showDateTemplate() {
    this.template = true;
    this.dateTemplate = true;
    this.attendTemplate = false;
    this.sessionTemplate = false;
    this.speakerTemplate = false;
    this.contactTemplate = false;
  }

  showSpeakerTemplate(){
    this.template = true;
    this.speakerTemplate = true;
    this.dateTemplate = false;
    this.attendTemplate = false;
    this.sessionTemplate = false;
    this.contactTemplate = false;
  }

  showContactTemplate(){
    this.template = true;
    this.contactTemplate = true;
    this.speakerTemplate = false;
    this.dateTemplate = false;
    this.attendTemplate = false;
    this.sessionTemplate = false;
  }

  closeTemplate(){
    this.template=false;
    this.contactTemplate = false;
    this.speakerTemplate = false;
    this.dateTemplate = false;
    this.attendTemplate = false;
    this.sessionTemplate = false;
  }

  onClickedOutside(e: Event) {
    // this.template = false;
  }


}
