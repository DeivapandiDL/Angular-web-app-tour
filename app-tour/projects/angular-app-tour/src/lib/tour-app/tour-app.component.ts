import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

import { TourInit } from '../tourinit';

@Component({
  selector: 'lib-tour-app',
  templateUrl: './tour-app.component.html',
  styleUrls: ['./tour-app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TourAppComponent implements OnInit {

  constructor() {

   }
  arrListVal:any = [];
@Output() onSendData = new EventEmitter<any>();
get arrList():any{
  return this.arrListVal
}
@Input() set arrList(val:any){
  if(val && val.length > 0){
    this.arrListVal = val;
    TourInit(val);
  }
}; 

  ngOnInit(): void {

  }

}
