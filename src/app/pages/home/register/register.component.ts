import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  speakerTemplate: boolean = true;
  participantTemplate: boolean = false;
  speakerLine: boolean = true;
  participantLine: boolean = false;

  ngOnInit(){
    
  }

  openSpeakerTemplate(){

    this.speakerTemplate = true;
    this.participantTemplate = false;
    this.speakerLine = true;
    this.participantLine = false;

  }

  openParticipantTemplate(){

    this.participantTemplate = true;
    this.speakerTemplate = false;
    this.participantLine = true;
    this.speakerLine = false;

  }
  

}
