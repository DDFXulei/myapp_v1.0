import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.css']
})
export class MySelectComponent implements OnInit {

  yuegongOpen:boolean = false;
  selectedPayValue:number;
  selectedDataValue:string = '';
  monthlyPayItem: any[];

  constructor() {
    this.monthlyPayItem = [{selKey: '全部', selValue: -1, isActived: true}, {selKey: '2000元以下', selValue: 2000, isActived: false}, {selKey: '2000-3000元', selValue: 3000, isActived: false}, {selKey: '3000-4000元', selValue: 4000, isActived: false}, {selKey: '5000元以上', selValue: 5000, isActived: false}];

  }

  ngOnInit() {
  }
  toggleClick(event) {
    this.yuegongOpen = !this.yuegongOpen;
    event.stopPropagation();
  }
  paySelect(event, i) {
    //console.log(i);
    console.log(event.target.getAttribute('title'));
    console.log(event.target.getAttribute('value'));
    this.selectedPayValue = event.target.getAttribute('value');
    this.selectedDataValue = event.target.getAttribute('title');
    this.yuegongOpen = !this.yuegongOpen;
    this.monthlyPayItem.forEach(
      (item) => item.isActived = false
    );
    this.monthlyPayItem[i].isActived = true;
    event.stopPropagation();
  }
}
