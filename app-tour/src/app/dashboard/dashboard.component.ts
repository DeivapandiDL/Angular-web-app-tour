import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  arrList= [
    {id:"testone",title:'Title One',content:'First test content'},
    {id:"testtwo",title:'Title Two',content:'Second test content',navid:'secondPage'},
    {id:"testthree",title:'Title 3',content:'Third test content',navid:'againDashboard'},
    {id:"testFour",title:'Title 4',content:'First test content'},
    {id:"testFive",title:'Title 5',content:'First test content'},
    {id:"testSix",title:'Title 6',content:'First test content'},
    {id:"testSeven",title:'Title 7',content:'First test content'},
    {id:"testEight",title:'Title 8',content:'First test content'},
    {id:"testNine",title:'Title 9',content:'First test content'},
    {id:"testTen",title:'Title 10',content:'First test content'},
    {id:"testeleven",title:'Title 11',content:'First test content'},
    {id:"testTwelve",title:'Title 12',content:'First test content'},
]

gotToNewPage(userid:any){

}

  ngOnInit(): void {
  }

}
