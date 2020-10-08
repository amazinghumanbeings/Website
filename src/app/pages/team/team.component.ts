import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){ 
      $(".category button").click(function(){ 
          $(this).removeClass("btn-light").addClass("btn-primary"); 
      });
  });

  }

}
