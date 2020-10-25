import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-select',
  templateUrl: './session-select.component.html',
  styleUrls: ['./session-select.component.css']
})
export class SessionSelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
