import { Component, OnInit } from '@angular/core';
import {Market} from "../../common/car";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  market: Market[];
  constructor() {
    this.market = [
{title: '东方汽车20年', secondTitle: '_路见美好', content: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna,',
        imgSrc: 'http://temp.im/500x500/4c77f2', dataSrc: 'http://temp.im/500x500/4c77f2', imgAlt: '东方汽车', imgHeight: 500, imgWidth: 500},
{title: '东方汽车20年', secondTitle: '_路见美好', content: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna,',
        imgSrc: 'http://temp.im/500x500/4c77f2', dataSrc: 'http://temp.im/500x500/4c77f2', imgAlt: '东方汽车', imgHeight: 500, imgWidth: 500},
{title: '东方汽车20年', secondTitle: '_路见美好', content: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna,',
        imgSrc: 'http://temp.im/500x500/4c77f2', dataSrc: 'http://temp.im/500x500/4c77f2', imgAlt: '东方汽车', imgHeight: 500, imgWidth: 500}
    ];
  }

  ngOnInit() {
  }

}
