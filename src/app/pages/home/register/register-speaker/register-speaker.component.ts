import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-speaker',
  templateUrl: './register-speaker.component.html',
  styleUrls: ['./register-speaker.component.css']
})
export class RegisterSpeakerComponent {

  iconBtn: boolean = true;
  searchBtn: boolean = false;
  template: boolean = false;
  sessionTemplate: boolean = false;
  attendTemplate: boolean = false;
  dateTemplate: boolean = false;
  speakerTemplate: boolean = false;
  contactTemplate: boolean = false;

  constructor() { }


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

  btnChange(){
    this.iconBtn = (this.template) ? false : true;
    this.searchBtn = (this.template) ? true : false;
  }

  onClickedOutside(e: Event) {
    this.template = false;
  }

}
