import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TailMoney, UsedCar} from "../model/UsedCar";
import {ProductService} from "../../shared/services/product-service.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {WebsocketService} from "../../shared/services/websocket.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  animations: [
    //可以设置多个动画
    trigger("动画名称", [
      state("状态名称", style({
        transform: "scale(1)" //设置样式
      })),
      state("active", style({
        transform: "scale(1.5)" //设置样式
      })),
      //设置从一个状态到另外一个状态的运动效果，非必填字段
      transition("inactive=>active", animate("100ms ease-in")),
      transition("active=>inactive", animate("100ms ease-out")),
    ])
  ]
})
export class ProductDetailComponent implements OnInit {
  //是否关注此车辆产品
  isWatched: boolean = false;
  //关注车辆的小心心
  watchImg: string = '../../../assets/img/d689dc63923d24f1334e6613a386ea4c.png';
  //商品最新报价
  currentBid: number;

  showVehiclePriceList: boolean = false;
  productCode: string;
  usedCar: UsedCar;
  usedCarIndexImg: any;
  //尾款购车
  tailMoney: TailMoney;

  showIndemnity: boolean = false;
  showServiceFee: boolean = false;
  showProDetail: boolean = false;
  showContactDetail: boolean = false;

  constructor(
    private routeInfo: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private wsService: WebsocketService
  ) {
    //从路由中获得车辆的产品代码,当产品详情页之间不会互相导航时，可以使用参数快照，否则需使用参数订阅
    this.productCode = routeInfo.snapshot.params['productCode'];
   // console.log(this.productCode);
    //获取车辆图片
    this.usedCarIndexImg = this.productService.getUsedCarIndexImg(this.productCode);

    //通过产品代码，获取产品信息
     this.productService.getUsedCar(this.productCode).subscribe(
      (data: UsedCar) => {
        console.log(data);
        this.usedCar = data;
        this.currentBid = data.directivePrice;
      }
    );
   //console.log(this.usedCar);

    this.productService.getUsedCarTailMoney(this.productCode).subscribe(
      (data: TailMoney) => {
        console.log(data);
        this.tailMoney = data[0];

      }
    );



  }

  ngOnInit() {
    // this.wsService.createObservable('ws://localhost:8085','1').subscribe(
    //   data => console.log(data),
    //   err => console.log(err),
    //   () => console.log('流结束了')
    // );
  }

  //关注车辆产品的方法
  watchProduct() {
    this.isWatched = ! this.isWatched;

    this.wsService.createObservable('ws://localhost:8085', this.productCode).subscribe(
          products => {
            let product = products.find(
              p => p.productCode === this.productCode
            );
            this.currentBid = product.bid;

          }
    )
    if (this.isWatched) {
      this.watchImg = '../../../assets/img/dcd7efd1942656f7529a45817b90645a.png';
    } else {
      this.watchImg = '../../../assets/img/d689dc63923d24f1334e6613a386ea4c.png';
    }

    //通过websocket向服务器发送关注的产品id
    this.wsService.createObservable('ws://localhost:8085', this.productCode);
  }
  sendMessage() {
    this.wsService.sendMessage('hello from client!');
  }
  returnBack() {
    this.router.navigateByUrl('usedcar/productList');
  }
  hoverVehiclePriceList() {
    this.showVehiclePriceList = true;
  }
  leaveVehiclePriceList() {
    this.showVehiclePriceList = false;
  }

  IndemnityClick() {
    this.showIndemnity = !this.showIndemnity;
  }

  serviceFeeClick() {
    this.showServiceFee = !this.showServiceFee;
  }
  proDetail() {
    this.showProDetail = !this.showProDetail;
  }
  contactUs() {
    this.showContactDetail = !this.showContactDetail;
  }
}
