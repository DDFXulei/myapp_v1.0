import {EventEmitter, Injectable} from '@angular/core';
import {UsedCar, TailMoney} from "../../usedcar/model/UsedCar";
import {UsedCarImg} from "../../usedcar/model/UsedCarImg";
import {HttpClient, HttpParams} from "@angular/common/http";
import {UsedCarSearchParams} from "../../usedcar/model/UsedCarSearch";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private usedCarList: UsedCar[];

  private usedCarImg: UsedCarImg = new UsedCarImg (
    'https://img.souche.com/551636c241f471bbf41ca3d2383f223a.jpg?x-oss-process=image/resize,w_560,p_300,h_420,m_fill',
    '' , '' , '', '', '', '', ',', '', true, true, false
  )

  private configUrl: string = '/api';

  private indexImgs: any[] = [
    {productCode: 'UC201810180001', imgSrc: '../../../assets/img/551636c241f471bbf41ca3d2383f223a1.jpg'},
    {productCode: 'UC201810180002', imgSrc: '../../../assets/img/59f66ab2dfa1fb58ccc6d93f4f5588b21.jpg'},
    {productCode: 'UC201810180003', imgSrc: '../../../assets/img/dff4bc652baa0b1bdbd10d38f7c3d8891.jpg'},
    {productCode: 'UC201810180004', imgSrc: '../../../assets/img/a1f32ec7828f408011dfa4183ddd97ae1.jpg'},
    {productCode: 'UC201810180005', imgSrc: '../../../assets/img/3e4887c1756308774b2cfb25819ef6d91.jpg'},
    {productCode: 'UC201810180006', imgSrc: '../../../assets/img/ff35bbbf648865a7cb017a0a587535551.jpg'}
  ]

  //根据车辆的代码获取相应的 车辆尾款信息
  //private tailMoney: TailMoney;

  constructor(
    private httpClient: HttpClient
  ) { }

  //定义二手车产品搜索的事件
  searchUsedCarEvent: EventEmitter<UsedCarSearchParams> = new EventEmitter();

  //定义发送消息
  sendMessageEvent: EventEmitter<string> = new EventEmitter();

  //定义排序事件
  sendSortEvent: EventEmitter<UsedCarSearchParams> = new EventEmitter();

  getUsedCarList() {
    return this.httpClient.get<UsedCar[]>(this.configUrl + '/usedcarlist');
  }

  getUsedCar(productCode: string) {
    return this.httpClient.get<UsedCar>(this.configUrl + '/usedcar/' + productCode);
  }

  getUsedCarTailMoney(productCode: string) {
    return this.httpClient.get<TailMoney>(this.configUrl + '/usedcar/' + productCode + '/tailmoney');
  }

  getUsedCarIndexImg (productCode: string): any {
    return this.indexImgs.find(
      (item) => item.productCode === productCode
    );
  }

  // search (params: UsedCarSearchParams) {
  //   return this.httpClient.get<UsedCar[]>(this.configUrl + '/usedcarlist',{search: this.encodeParams(params)});
  // }

  searchUsedCar(usedCarParams: UsedCarSearchParams) {
    return this.httpClient.get<UsedCar[]>(this.configUrl + '/usedcarlist',
      { params: new HttpParams()
        .set('vehicleBrand', usedCarParams.vehicleBrand)
        .set('vehicleSeries', usedCarParams.vehicleSeries)
        .set('sortBy', usedCarParams.sortBy )
        .set('sortMode', usedCarParams.sortMode)
      });
  }

  sortUsedCar(usedCarSortParams: UsedCarSearchParams) {
    return this.httpClient.get<UsedCar[]>(
      this.configUrl + '/usedcarlist/sort',
      {
        params:
          new HttpParams().set('vehicleBrand', usedCarSortParams.vehicleBrand)
            .set('vehicleSeries', usedCarSortParams.vehicleSeries)
            .set('sortBy', usedCarSortParams.sortBy)
            .set('sortMode', usedCarSortParams.sortMode)

      }
    );
  }
  //http的UrlParams类型转换查询参数的方法
  // encodeParams(params: UsedCarSearchParams) {
  //   let result: HttpParams;
  //   result =
  //     //keys方法返回参数所有属性的 集合
  //     Object.keys(params)
  //       //过滤出查询参数有值的
  //     .filter(key => params[key])
  //     .reduce((sum: HttpParams, key: string) => {
  //       sum.append(key, params[key]);
  //       return sum;
  //     }, new HttpParams);
  //   return result;
  // }



}
