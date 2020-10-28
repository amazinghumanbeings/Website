import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  speakerTemplate: boolean = false;
  participantTemplate: boolean = false;
  speakerLine: boolean = false;
  participantLine: boolean = false;
  

  openSpeakerTemplate()  {
    this.speakerTemplate = true;
    this.participantTemplate = false;
    this.speakerLine = true;
    this.participantLine = false;

  }
  

  openParticipantTemplate() {

    this.participantTemplate = true;
    this.speakerTemplate = false;
    this.participantLine = true;
    this.speakerLine = false;

  }

  closeTemplates()  {
    this.speakerTemplate = false;
    this.participantTemplate = false;
    this.speakerLine = false;
    this.participantLine = false;

  }

  onClickOutside(e: Event){
    this.closeTemplates();
  }

  constructor() { }


  ngOnInit() {

    const callback = this;

    window.addEventListener('scroll', function() {
      console.log(1);
    });

      var distance = $('#navbar').offset().top,
        $window = $(window);

      $window.scroll(function () {
        if ($window.scrollTop() >= distance + 180) {
          $('.navbar-custom').css("display", "block");
        }
        else {
          $('.navbar-custom').css("display", "none");
          callback.closeTemplates();
        }
      });
  }

  

}
