import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var distance = $('#navbar').offset().top,
      $window = $(window);

    $window.scroll(function () {
      if ($window.scrollTop() >= distance) {
        $('.navbar-custom').css("background-color", "royalblue");
        $('.navbar-custom a').css('color', 'white');
        
       /* hover */ 
        $(".navbar-custom a").hover(function () {
          $(this).css("color", "#ffb74d");
        }, function(){
          $(this).css("color", "white");
        });
      }
      else {
        $('.navbar-custom').css("background-color", "#eeeeee");
        $('.navbar-custom a').css('color', 'black');

        /* Hover */
        $(".navbar-custom a").hover(function () {
          $(this).css("color", "royalblue");
        }, function(){
          $(this).css("color", "black");
        });

      }
    });


  }

}
