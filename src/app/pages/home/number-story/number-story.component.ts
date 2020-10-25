import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-number-story',
  templateUrl: './number-story.component.html',
  styleUrls: ['./number-story.component.css']
})
export class NumberStoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var a = 0;
    $(window).scroll(function() {
  
      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },
  
            {
  
              duration: 5000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
  
            });
        });
        a = 1;
      }
  
    });
    
  }

  


}
