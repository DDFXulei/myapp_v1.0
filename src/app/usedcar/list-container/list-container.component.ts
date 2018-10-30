import {Component, OnInit, Output} from '@angular/core';
import {SortUsedCar, UsedCar} from "../model/UsedCar";
import {ProductService} from "../../shared/services/product-service.service";
import {UsedCarSearchParams} from "../model/UsedCarSearch";
import 'rxjs';
@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

  sortBy: string;
  sortMode: string;

  vinCount: number = 0;
  clickActive: boolean = false;
  filterItems: SortUsedCar[];
  usedCarList: UsedCar[];

  isJisu: boolean = true;
  isPercent: boolean = false;
  isZhijiang: boolean = true;
  isZhunxin: boolean = true;


  constructor(
    private productServices: ProductService
  ) {
    this.filterItems = [
      new SortUsedCar( '默认排序', 'enterDate', true,  false,  true,  false),
      new SortUsedCar( '首付', 'lastDownPay',  false,  true,  false,  false),
      new SortUsedCar( '月供', 'monthlyPayment', false,  true,  false,  false),
      new SortUsedCar( '车龄', 'vehicleAge',  false,  true,  false,  false),
      new SortUsedCar( '里程', 'dashMilieage', false,  true,  false,  false),
    ];
    this.filterItems.forEach(
      item => {
        if (item.isActived) {
          this.sortBy = item.name;
          this.sortMode = '' + item.isDown;
        }
      }
    );

  }

  ngOnInit() {
    this.productServices.getUsedCarList().subscribe(
      (data: UsedCar[]) => {
        this.usedCarList = data;
        if (this.usedCarList != null) {
          this.vinCount = this.usedCarList.length;
        } else {
          this.vinCount = 0;
        }

      },
    //error => console.log(error)  // error path
      );


    this.productServices.searchUsedCarEvent.subscribe(
      (params: UsedCarSearchParams) =>
          //console.log('我是车辆列表组件，我从搜索组件中获得的搜索对象参数是:' + JSON.stringify(params)
           this.productServices.searchUsedCar(params).subscribe(
            data => this.usedCarList = data
          )
        )


    this.productServices.searchUsedCarEvent.subscribe(
      params => {
        this.productServices.searchUsedCar(params).subscribe(
          (data) => {
            this.usedCarList = data;
            //usedCarList为空时，将vinCount 赋值为0
            if (this.usedCarList != null) {
              this.vinCount = this.usedCarList.length;
            } else {
              this.vinCount = 0;
            }
          }
        );
        //console.log('这里是车辆列表组件，我获得的参数是' + params);
      }
    );


    this.productServices.sendSortEvent.subscribe(
      (item: SortUsedCar) => console.log('我是车辆列表组件，我从排序组件中获得的对象是:' + item)
    );
    // this.productServices.sendMessageEvent.subscribe(
    //   item => console.log('我是车辆列表组件，我从排序组件中获得的品牌是:' + item)
    // );

  }



  labelOver(item: any) {
    if (!item.clickActive) {
      item.isActived = true;
    }


  }
  labelLeave(item: any) {
    if (!item.clickActive) {
      item.isActived = false;
    }
  }

  //用户点击排序组件
  labelClick(item: any) {
    this.sortBy = item.name;

    //console.log(item.key);
    this.filterItems.forEach(
      (i) => {
        if (i.key === item.key) {
          return false;
        } else {
          i.isActived = false;
          i.clickActive = false;
          i.isDown = false;
          this.sortMode = '' + false;
          //赋值给搜索组件
        }
      }
    );
    if (!item.clickActive) {
      item.clickActive = true;
    } else {
      item.isDown = !item.isDown;
      this.sortMode = '' + item.isDown;
    }



  }

}
