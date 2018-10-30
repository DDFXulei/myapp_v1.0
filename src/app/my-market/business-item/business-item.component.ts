import { Component, OnInit } from '@angular/core';
import {BussinessItem} from "../../common/car";

@Component({
  selector: 'app-business-item',
  templateUrl: './business-item.component.html',
  styleUrls: ['./business-item.component.css']
})
export class BusinessItemComponent implements OnInit {

  busItem: BussinessItem[];
  constructor() {
    this.busItem = [
      {imgSrc: 'http://temp.im/140x140/#fff', routeInfo: '/newcar', title: '新车业务', secondTitle: '关注最新汽车行业动向！', btnName: '了解详情'},
      {imgSrc: 'http://temp.im/140x140/#fff', routeInfo: '/usedcar', title: '二手车业务', secondTitle: '提供省心的二手车交易服务！', btnName: '了解详情'},
      {imgSrc: 'http://temp.im/140x140/#fff', routeInfo: 'carFinanceDetail', title: '汽车金融', secondTitle: '提供最全最贴心的的汽车金融政策！', btnName: '了解详情'}
    ];
  }

  ngOnInit() {
  }

  itemClick(url: string) {
    console.log(url);
  }
}
