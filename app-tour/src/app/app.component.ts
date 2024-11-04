import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data= [
    {targetId:"testone",title:'Title One',content:'First test content',navPath:'/',navTimer:5000},
    {targetId:"secondpageTitle1",title:'Title Two',content:'Second test content',navid:'secondPage',navTimer:5000},
    // {targetId:"testthree",title:'Title Three',content:'Third test content',navPath:'/',navTimer:5000},
    {targetId:"testtwo",title:'Title Two',content:'Second test content',navPath:'/',navTimer:5000},
    {targetId:"testtthree",title:'Title Three',content:'Third test content'},
    {targetId:"testFour",title:'Title 4',content:'First test content'},
    {targetId:"testTen",title:'Title 5',content:'First test content'},
    {targetId:"testSix",title:'Title 6',content:'First test content'},
    {targetId:"testSeven",title:'Title 7',content:'First test content'},
    {targetId:"testEight",title:'Title 8',content:'First test content'},
    {targetId:"testNine",title:'Title 9',content:'First test content'},
    {targetId:"testFive",title:'Title 10',content:'First test content'},
    {targetId:"testeleven",title:'Title 11',content:'First test content'},
    {targetId:"testTwelve",title:'Title 12',content:'First test content'},
    // {id:"testFour",title:'Title Four',content:'Fourth test content'},
]
enableTour:boolean = false;
startTour(){
this.enableTour = true;
}

sendResponseToChild(eve:any){
  console.log(eve);
}
}
