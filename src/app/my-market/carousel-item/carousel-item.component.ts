import { Component, OnInit } from '@angular/core';
import {Carousel} from "../../common/car";

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {

  carousel: Carousel[];
  constructor() {
    this.carousel = [
      {imgSrc: 'http://temp.im/1890x500/31A4D3', imgAlt: '第一 东方汽车', dataSrc: 'http://temp.im/1890x500/31A4D3'},
      {imgSrc: 'http://temp.im/1890x500/FFAEC9', imgAlt: '第二 东方汽车', dataSrc: 'http://temp.im/1890x500/FFAEC9'},
      {imgSrc: 'http://temp.im/1890x500/333', imgAlt: '第三 东方汽车', dataSrc: 'http://temp.im/1890x500/333'}
    ]
  }

  ngOnInit() {
  }

}
