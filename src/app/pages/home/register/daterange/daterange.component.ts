import { Component, OnInit } from '@angular/core';
import { SelectionRange } from '@progress/kendo-angular-dateinputs';

@Component({
  selector: 'app-daterange',
  templateUrl: './daterange.component.html',
  styleUrls: ['./daterange.component.css']
})
export class DaterangeComponent implements OnInit {

  public range: SelectionRange = { start: null, end: null };

  constructor() { }

  ngOnInit() {
  }

}
