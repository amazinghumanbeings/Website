import { Component, OnInit, ViewChild } from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';
import { data } from './data';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  @ViewChild(DataBindingDirective, { static: false }) dataBinding: DataBindingDirective;
  public gridData: any[] = data;
  public gridView: any[];

  public mySelection: string[] = [];

  public pageSize:number;

  public ngOnInit(): void {
    this.gridView = this.gridData;
    this.pageSize = 6;
  }

  public onFilter(inputValue: string): void {
    this.gridView = process(this.gridData, {
      filter: {
        logic: "or",
        filters: [
          {
            field: 'id',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'name',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'speaker_pic',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'host_pic',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'host',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'topic',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'dt',
            operator: 'contains',
            value: inputValue
          }
        ],
      }
    }).data;

    this.dataBinding.skip = 0;
  }

}
