import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-participant',
  templateUrl: './register-participant.component.html',
  styleUrls: ['./register-participant.component.css']
})
export class RegisterParticipantComponent implements OnInit {

  iconBtn: boolean = true;
  searchBtn: boolean = false;
  template: boolean = false;
  sessionTemplate: boolean = false;
  speakerTemplate: boolean = false;
  contactTemplate: boolean = false;

  constructor() { }

  ngOnInit() {


  }

  showSessionTemplate() {
    this.template = true;
    this.sessionTemplate = true;
    this.speakerTemplate = false;
    this.contactTemplate = false;

  }

  showSpeakerTemplate(){
    this.template = true;
    this.speakerTemplate = true;
    this.sessionTemplate = false;
    this.contactTemplate = false;
  }

  showContactTemplate(){
    this.template = true;
    this.contactTemplate = true;
    this.speakerTemplate = false;
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
