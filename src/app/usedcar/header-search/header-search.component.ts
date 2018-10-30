import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UsedCarSearchParams} from "../model/UsedCarSearch";
import {ProductService} from "../../shared/services/product-service.service";

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.css']
})
export class HeaderSearchComponent implements OnInit, OnChanges {


  @Input()
  sortBy: string;
  @Input()
  sortMode: string;
  //用户已选择的车系，绑定到已选条件中

  //月供下拉框是否下拉
  monthlyPayOpen: boolean = false;
  //车龄下拉框是否下拉
  vehicleAgeOpen: boolean = false;
  //里程下拉框是否下拉
  vehicleMileageOpen: boolean = false;
  //车型下拉框是否下拉
  vehicleTypeOpen: boolean = false;
  //颜色下拉框
  vehicleColorOpen: boolean = false;

  initialD: any[];
  ngSwitch: number;

  tabD: any[];
  brandList: any[];
  //初始化时候，可选的车系数组
  initSeriesList: any[];
  //根据选择的品牌，改变可选车系数组
  seriesOptions: any[];
  //可选首付列表
  downPayOptions: any[];
  //可选车价
  vehPriceOptions: any[];
  //可选月供
  monthlyPayOptions: any[];
  //可选车龄
  vehicleAgeOptions: any[];
  //可选里程
  vehicleMileageOptions: any[];
  //可选车类型
  vehicleTypeOptions: any[];
  //可选车身颜色
  vehicleColorOptions: any[];

  //用户已选择的品牌，绑定到已选条件中
  selectedBrandCode: string = '-1';
  selectedBrand: string;
  //用户已选择的车系，绑定到已选条件中
  selectedSeriesCode: string = '-1';
  selectedSeries: string = '';
  //用户已选择的首付，绑定到已选条件中
  selectedLastDownPay: {payMode: string, minValue: number, maxValue: number, isActive: boolean};
  //用户已选车价
  selectedVehiclePrice: {vehPrice: string, minValue: number, maxValue: number, isActive: boolean};
  //用户已选月供
  selectedMonthlyPay: {monthlyPay: string, minPay: number, maxPay: number, isActive: boolean};
  //用户已选车龄
  selectedVehicleAge: {vehicleAge: string, minAge: number, maxAge: number, isActive: boolean};
  //用户已选里程
  selectedVehicleMileage: {vehMileage: string, minMileage: number, maxMileage: number, isActive: boolean};
  //用户已选车体类型SUV 轿车 跑车
  selectedVehicleType:  {vehicleType: string, vehicleCode: number, isActive: boolean};
  //用户已选车身颜色
  selectedVehicleColor: {vehicleColor: string , colorCode: string, colorImg: string, isActive: boolean};

  //定义的搜索模型，考虑通过发射其valueChanges事件
  searchModel: boolean = true;

  usedCarSearchParams: UsedCarSearchParams;

  constructor(
    private productService: ProductService
  ) {
    //顶部选项卡，根据鼠标移动，显示不同的品牌选项
    this.ngSwitch = 0
    this.selectedSeries = '';
    this.selectedBrand = '';

    this.tabD = [
      {key: '全部', isActive: true},
      {key: 'A', isActive: false},
      {key: 'B', isActive: false},
      {key: 'C', isActive: false},
      {key: 'D', isActive: false}];

    //sortNo用于点击此品牌时，激活此品牌所在的字母选项卡
    this.brandList = [
      [
        {brandName: '宝马', brandCode: 'BMW', sortNo: 2, initialD: 'B', isActive: false},
        {brandName: '奔驰', brandCode: 'Benze',  sortNo: 2, initialD: 'B', isActive: false},
        {brandName: '奥迪', brandCode: 'Audi',  sortNo: 1, initialD: 'A', isActive: false},
        {brandName: '大众', brandCode: 'DasAuto', sortNo: 4, initialD: 'D', isActive: false},
        {brandName: '别克', brandCode: 'Buick',  sortNo: 2, initialD: 'B', isActive: false},
        {brandName: '本田', brandCode: 'Honda',  sortNo: 2, initialD: 'B', isActive: false}
        ],
      [
        {brandName: '奥迪', brandCode: 'Audi',  sortNo: 1, initialD: 'A', isActive: false},
        {brandName: '阿尔法罗密欧', brandCode: 'Alfa',  sortNo: 1, initialD: 'A', isActive: false}
        ],
      [
        {brandName: '宝马', brandCode: 'BMW', sortNo: 2, initialD: 'B', isActive: false},
        {brandName: '别克', brandCode: 'Buick', sortNo: 2, initialD: 'B', isActive: false },
        {brandName: '本田', brandCode: 'Honda', sortNo: 2, initialD: 'B', isActive: false},
        {brandName: '奔驰', brandCode: 'Benze', sortNo: 2, initialD: 'B', isActive: false }
        ],
      [
        {brandName: '长城', brandCode: 'Haval', sortNo: 3, initialD: 'C', isActive: false},
        {brandName: '长安', brandCode: 'ChangAn', sortNo: 3, initialD: 'C', isActive: false}
        ],
      [
        {brandName: 'DS', brandCode: 'DS', sortNo: 4, initialD: 'D', isActive: false},
        {brandName: '大众', brandCode: 'DasAuto', sortNo: 4, initialD: 'D', isActive: false}
        ]
    ];
    this.initSeriesList = [
        {key: '全部',
          value: [
            {seriesCode: null, seriesName: '全部', brandCode: '-1', brandName: 'all', isActive: true},
            {seriesCode: 'BMW3' , seriesName: '宝马3系', brandCode: 'BMW', brandName: '宝马', sortNo: 2, initialD: 'B', isActive: false},
            {seriesCode: 'BMW5', seriesName: '宝马5系', brandCode: 'BMW', brandName: '宝马', sortNo: 2, initialD: 'B', isActive: false},
            {seriesCode: 'BenzeC', seriesName: '奔驰C级', brandCode: 'Benze', brandName: '奔驰', sortNo: 2, initialD: 'B', isActive: false},
            {seriesCode: 'AudiA4L', seriesName: '奥迪A4L', brandCode: 'Audi', brandName: '奥迪', sortNo: 1, initialD: 'B', isActive: false},
            {seriesCode: 'AudiA6L', seriesName: '奥迪A6L', brandCode: 'Audi', brandName: '奥迪', sortNo: 1, initialD: 'B', isActive: false},
            {seriesCode: 'BenzeGLA', seriesName: '奔驰GLA级', brandCode: 'Benze', brandName: '奔驰', sortNo: 2, initialD: 'B', isActive: false},
            {seriesCode: 'BenzeE', seriesName: '奔驰E级', brandCode: 'Benze', brandName: '奔驰', sortNo: 2, initialD: 'B', isActive: false},
            {seriesCode: 'HondaOdyssey', seriesName: '奥德赛', brandCode: 'Honda', brandName: '本田', sortNo: 2, initialD: 'B', isActive: false},
            {seriesCode: 'BuickReal', seriesName: '君威', brandCode: 'Buick', brandName: '别克', sortNo: 2, initialD: 'B', isActive: false},
            {seriesCode: 'DasAutoGolf', seriesName: '高尔夫', brandCode: 'DasAuto', brandName: '大众', sortNo: 4, initialD: 'D', isActive: false}
            ]
      },
      {
        key: '奥迪',
        value: [
          {seriesCode: null, seriesName: '全部', brandCode: 'Audi', brandName: '奥迪', isActive: true},
          {seriesCode: 'AudiA3', seriesName: '奥迪A3', brandCode: 'Audi', brandName: '奥迪', bsortNo: 1, initialD: 'A', isActive: false},
          {seriesCode: 'AudiA4L', seriesName: '奥迪A4L', brandCode: 'Audi', brandName: '奥迪', sortNo: 1, initialD: 'A', isActive: false},
          {seriesCode: 'AudiA6L', seriesName: '奥迪A6L', brandCode: 'Audi', brandName: '奥迪', sortNo: 1, initialD: 'A', isActive: false},
          {seriesCode: 'AudiA5', seriesName: '奥迪A5', brandCode: 'Audi', brandName: '奥迪', sortNo: 1, initialD: 'A', isActive: false}

          ]
      },
      {
        key: '阿尔法罗密欧',
        value: [
          {seriesCode: '-1', seriesName: '全部', brandCode: 'Alfa', brandName: '阿尔法罗密欧', isActive: true},
          {seriesCode: 'AlfaGiulia', seriesName: 'Giulia', brandCode: 'Alfa', brandName: '阿尔法罗密欧', sortNo: 1, initialD: 'A', isActive: false},
          {seriesCode: 'AlfaStelvio', seriesName: 'Stelvio', brandCode: 'Alfa', brandName: '阿尔法罗密欧', sortNo: 1, initialD: 'A', isActive: false}
          ]
      },
      {
        key: '宝马',
        value: [
          {seriesCode: null, seriesName: '全部', brandCode: 'BMW', brandName: '宝马', isActive: true},
          {seriesCode: 'BMW1', seriesName: '宝马1系', brandCode: 'BMW', brandName: '宝马', sortNo: 2, initialD: 'B', isActive: false},
          {seriesCode: 'BMW3', seriesName: '宝马3系', brandCode: 'BMW', brandName: '宝马', sortNo: 2, initialD: 'B', isActive: false},
          {seriesCode: 'BMW5', seriesName: '宝马5系', brandCode: 'BMW', brandName: '宝马', sortNo: 2, initialD: 'B', isActive: false}
          ]
      },
      {
        key: '奔驰',
        value: [
          {seriesCode: null, seriesName: '全部', brandCode: 'Benze', brandName: '奔驰', isActive: true},
          {seriesCode: 'BenzeC', seriesName: '奔驰C级', brandCode: 'Benze', brandName: '奔驰', sortNo: 2, initialD: 'B', isActive: false},
          {seriesCode: 'BezneS', seriesName: '奔驰S级', brandCode: 'Benze', brandName: '奔驰', sortNo: 2, initialD: 'B', isActive: false}
          ]
      },
      {
        key: '本田',
        value: [
          {seriesCode: null, seriesName: '全部', brandCode: 'Honda', brandName: '本田', isActive: true},
          {seriesCode: 'HondaCivic', seriesName: '思域', brandCode: 'Honda', brandName: '本田', sortNo: 2, initialD: 'B', isActive: false},
          {seriesCode: 'HondaAccord', seriesName: '雅阁', brandCode: 'Honda', brandName: '本田', sortNo: 2, initialD: 'B', isActive: false},
          {seriesCode: 'HondaOdyssey', seriesName: '奥德赛', brandCode: 'Honda', brandName: '本田', sortNo: 2, initialD: 'B', isActive: false}
          ]
      },
      {
        key: '别克',
        value: [
          {seriesCode: null, seriesName: '全部', brandCode: 'Buick', brandName: '别克', isActive: true},
          {seriesCode: 'BuickReal', seriesName: '君威', brandCode: 'Buick', brandName: '别克', sortNo: 2, initialD: 'B', isActive: false},
          {seriesCode: 'BuickLeal', seriesName: '君越', brandCode: 'Buick', brandName: '别克', sortNo: 2, initialD: 'B', isActive: false}
        ]
      },
      {
        key: '长城',
        value: [
          {seriesCode: null, seriesName: '全部', brandCode: 'Haval', brandName:  '长城', isActive: true},
          {seriesCode: 'HavalH5', seriesName: 'H5', brandCode: 'Haval', brandName: '长城',  sortNo: 3, initialD: 'C', isActive: false },
          {seriesCode: 'HavalH6', seriesName: 'H6', brandCode: 'Haval', brandName: '长城', sortNo: 3, initialD: 'C', isActive: false}
          ]
      },
      {
        key: '长安',
        value: [
          {seriesCode: null, seriesName: '全部', brandCode: 'ChangAn', brandName: '长安', isActive: true},
          {seriesCode: 'ChangAnCC', seriesName: '睿骋CC', brandCode: 'ChangAn', brandName: '长安', sortNo: 3, initialD: 'C', isActive: false },
          {seriesCode: 'ChangAnYY', seriesName: '逸动', brandCode: 'ChangAn', brandName: '长安', sortNo: 3, initialD: 'C', isActive: false},
          {seriesCode: 'ChangAnCS35', seriesName: '长安CS35', brandCode: 'ChangAn', brandName: '长安', sortNo: 3, initialD: 'C', isActive: false}
          ]
      },
      {
        key: 'DS',
        value: [
          {seriesCode: null, seriesName: '全部', brandCode: 'DS',  brandName: null, isActive: true},
          {seriesCode: 'DS5', seriesName: 'DS5', brandName: 'DS', brandCode: 'DS', sortNo: 4, initialD: 'D', isActive: false },
          {seriesCode: 'DS6', seriesName: 'DS6', brandName: 'DS', brandCode: 'DS',  sortNo: 4, initialD: 'D', isActive: false},
          {seriesCode: 'DS7', seriesName: 'DS7', brandName: 'DS', brandCode: 'DS', sortNo: 4, initialD: 'D', isActive: false }
          ]
      },
      {
        key: '大众',
        value: [
          {seriesCode: null, seriesName: '全部', brandCode: 'DasAuto', brandName: '大众', isActive: true},
          {seriesCode: 'DasAutoGolf', seriesName: '高尔夫', brandCode: 'DasAuto', brandName: '大众', sortNo: 4, initialD: 'D', isActive: false},
          {seriesCode: 'DasAutoSagtar', seriesName: '速腾', brandCode: 'DasAuto', brandName: '大众', sortNo: 4, initialD: 'D', isActive: false},
          {seriesCode: 'DasMaton', seriesName: '迈腾', brandCode: 'DasAuto', brandName: '大众', sortNo: 4, initialD: 'D', isActive: false }
          ]
      },
    ];
    this.seriesOptions = [
      {seriesCode: '-1', seriesName: '全部', brandCode: '-1', brandName: '全部', isActive: true},
      {seriesCode: 'BMW3', seriesName: '宝马3系', brandCode: 'BMW', brandName: '宝马', sortNo: 2, initialD: 'B', isActive: false},
      {seriesCode: 'BMW5', seriesName: '宝马5系', brandCode: 'BMW', brandName: '宝马', sortNo: 2, initialD: 'B', isActive: false},
      {seriesCode: 'BenzeC', seriesName: '奔驰C级', brandCode: 'Benze', brandName: '奔驰', sortNo: 2, initialD: 'B', isActive: false},
      {seriesCode: 'AudiA4L', seriesName: '奥迪A4L', brandCode: 'Audi', brandName: '奥迪', sortNo: 1, initialD: 'A', isActive: false},
      {seriesCode: 'AudiA6L', seriesName: '奥迪A6L', brandCode: 'Audi', brandName: '奥迪', sortNo: 1, initialD: 'A', isActive: false},
      {seriesCode: 'BenzeGLA', seriesName: '奔驰GLA级', brandCode: 'Benze', brandName: '奔驰', sortNo: 2, initialD: 'B', isActive: false},
      {seriesCode: 'BenzeE', seriesName: '奔驰E级', brandCode: 'Benze', brandName: '奔驰', sortNo: 2, initialD: 'B', isActive: false},
      {seriesCode: 'HondaOdyssey', seriesName: '奥德赛', brandCode: 'Honda', brandName: '本田', sortNo: 2, initialD: 'B', isActive: false},
      {seriesCode: 'BucikReal', seriesName: '君威', brandCode: 'Buick', brandName: '别克', sortNo: 2, initialD: 'B', isActive: false},
      {seriesCode: 'BucikLeal', seriesName: '高尔夫', brandCode: 'DasAuto', brandName: '大众', sortNo: 4, initialD: 'D', isActive: false}];
    //初始化首付选项
    this.downPayOptions = [
      {payMode: '全部', minValue: null, maxValue: null, isActive: true},
      {payMode: '1万以内', minValue: null, maxValue: 1, isActive: false},
      {payMode: '1-2万', minValue: 1, maxValue: 2, isActive: false},
      {payMode: '2-3万', minValue: 2, maxValue: 3, isActive: false},
      {payMode: '3-4万', minValue: 3, maxValue: 4, isActive: false},
      {payMode: '4-5万', minValue: 4, maxValue: 5, isActive: false},
      {payMode: '5万以上', minValue: 5, maxValue: null, isActive: false},
    ];

    this.vehPriceOptions = [
      {vehPrice: '全部', minValue: null, maxValue: null, isActive: true},
      {vehPrice: '10万以内', minValue: null, maxValue: 10, isActive: false},
      {vehPrice: '10-20万', minValue: 10, maxValue: 20, isActive: false},
      {vehPrice: '20-30万', minValue: 20, maxValue: 30, isActive: false},
      {vehPrice: '30-40万', minValue: 30, maxValue: 40, isActive: false},
      {vehPrice: '40万以上', minValue: 40, maxValue: null, isActive: false},
    ];

    this.monthlyPayOptions = [
      {monthlyPay: '全部', minPay: null, maxPay: null, isActive: true},
      {monthlyPay: '2000元以下', minPay: null, maxPay: 2000, isActive: false},
      {monthlyPay: '2000-3000元', minPay: 2000, maxPay: 3000, isActive: false},
      {monthlyPay: '3000-4000元', minPay: 3000, maxPay: 4000, isActive: false},
      {monthlyPay: '5000元以上', minPay: 5000, maxPay: null, isActive: false}
      ];
    //初始化车龄下拉可选项
    this.vehicleAgeOptions = [
      {vehicleAge: '全部', minAge: null, maxAge: null, isActive: true},
      {vehicleAge: '1年以内', minAge: null, maxAge: 1, isActive: false},
      {vehicleAge: '1-3年', minAge: 1, maxAge: 3, isActive: false},
      {vehicleAge: '3-6年', minAge: 3, maxAge: 6, isActive: false},
    ];

    //初始化车辆里程可选项
    this.vehicleMileageOptions = [
      {vehMileage: '全部', minMileage: null, maxMileage: null, isActive: true},
      {vehMileage: '1万公里以内', minMileage: null, maxMileage: 1, isActive: false},
      {vehMileage: '1-3万公里', minValue: 1, maxMileage: 3, isActive: false},
      {vehMileage: '3-6万公里', minMileage: 3, maxMileage: 6, isActive: false},
      {vehMileage: '6-10万公里', minMileage: 6, maxMileage: 10, isActive: false}
    ];

    this.vehicleTypeOptions = [
      {vehicleType: '全部', vehicleCode: 12700001 , isActive: true},
      {vehicleType: '紧凑型车', vehicleCode: 1270002, isActive: false},
      {vehicleType: '中型车', vehicleCode: 12700003, isActive: false},
      {vehicleType: '中大型车', vehicleCode: 12700004, isActive: false},
      {vehicleType: 'SUV', vehicleCode: 12700005, isActive: false},
      {vehicleType: 'MPV', vehicleCode: 12700006, isActive: false},
      {vehicleType: '跑车', vehicleCode: 12700007, isActive: false}
    ]

    this.vehicleColorOptions = [
      {vehicleColor: '全部' , colorCode: null, colorImg: null, isActive: true},
      {vehicleColor: '红色', colorCode: 'red', colorImg: '//img.souche.com/20170110/png/04563d820e5a072606ada667240b3ffc.png', isActive: false},
      {vehicleColor: '白色', colorCode: 'white', colorImg: '//img.souche.com/20170110/png/80ddba3eb98821f40698194ccc028dc6.png', isActive: false},
      {vehicleColor: '蓝色', colorCode: 'blue', colorImg: '//img.souche.com/20170110/png/c7b19cd48123df24d8513484bf9ea8dc.png', isActive: false},
      {vehicleColor: '黑色', colorCode: 'black', colorImg: '//img.souche.com/20170110/png/7e165cf38d104d075b2fa48d78e64535.png', isActive: false}

    ];

  }

  ngOnInit() {



  }

  //ngOnChanges初始化输入属性 , 钩子调用时间早于ngOnInit初始化（除输入属性外的）其他属性
  ngOnChanges(changes: SimpleChanges): void {
    this.usedCarSearchParams = new UsedCarSearchParams(this.selectedBrandCode, this.selectedSeriesCode, this.sortBy , this.sortMode);
    this.usedCarSearchParams.sortBy = this.sortBy;
    this.usedCarSearchParams.sortMode = this.sortMode;
    this.productService.searchUsedCarEvent.emit(this.usedCarSearchParams);
    console.log('我是搜索组件我发送的搜索参数对象：' + JSON.stringify(this.usedCarSearchParams));
  }


  itemTagClick(i): void {
    this.ngSwitch = i;
    this.initialD.forEach(
      (item) => item.isActive = false
    )
    this.initialD[i].isActive = true;
  }

  mouseoverTag(i): void {
    this.ngSwitch = i;
  }

  tabClick(initialD): void {
    if (initialD === '全部') {
      //首字母选项，点击 全部 时候，已选车系置为空，已选品牌置为空
      this.selectedSeries = null;
      //激活车系选项卡
      // for (let i = 0; i < this.seriesOptions.length; i++) {
      //   this.seriesOptions[i].isActive = false;
      //   if (this.seriesOptions[i].key === this.initialD) {
      //     this.seriesOptions[i].isActive = true;
      //   }
      // }
      this.seriesOptions.forEach(
        (item) => {
          item.isActive = false;
          if (item.key === initialD) {
            item.isActive = true;
          }
        }
      );
      this.initSeriesList.forEach(
        (item) => {
          if (item.key === initialD) {
            this.seriesOptions = item.value;
          }
          //是否有必要加上return
          return false;
        }
      );

      this.tabD.forEach(
        (item) => {
          item.isActive = false;
          if (item.key === '全部') {
            item.isActive = true;
          }
          this.brandList.forEach(
            (brandName) => {
              brandName.forEach(
                (i) => {
                  i.isActive = false;
                }
              );
            }
          );
        }
      );

      this.selectedBrand = null;
    }
  }

  //响应用户点击品牌
  brandClick(brand: any): void {
    //console.log(brand.brandName);

    if (brand.brandName === '全部') {
      this.usedCarSearchParams.vehicleBrand = '-1';
      this.selectedBrandCode = '-1';
      this.usedCarSearchParams.vehicleSeries = '-1';
      this.selectedSeriesCode = '-1';
      return;
    }
    //将搜索参数对象的品牌置为用户点击的品牌
    this.usedCarSearchParams.vehicleBrand = brand.brandCode;
    this.selectedBrandCode  = brand.brandCode;
    console.log(this.usedCarSearchParams);
    this.usedCarSearchParams.vehicleSeries = '-1';
    //发送搜索事件
    console.log('我是搜索组件我发送的搜索参数对象：' + JSON.stringify(this.usedCarSearchParams))
    this.productService.searchUsedCarEvent.emit(this.usedCarSearchParams);

    //向车辆列表组件发送消息
    //this.productService.sendMessageEvent.emit(brand);


    this.selectedSeries = null;
    this.selectedBrand = brand.brandName;
    this.brandList.forEach(
      (item) => {
        item.forEach(
          i => {
            if (i.brandName === brand.brandName) {
              i.isActive = true;
              //显示品牌所在的选项卡
              this.tabD.forEach(
                (d) => {
                  if (d.key === i.initialD) {
                    d.isActive = true;
                    this.ngSwitch = i.sortNo;
                    //console.log(i.sortNo);
                  } else {
                    d.isActive = false;
                  }
                }
              );
            } else {
              i.isActive = false;
            }
          }
        );
      }
    );
    //根据点击的品牌，返回此品牌的所有车系数组给可选车系数组
    this.initSeriesList.forEach(
      (item) => {
        if (item.key === this.selectedBrand) {
          this.seriesOptions = item.value;
        }
      }
    );
  }

  //响应用户点击车系
  seriesClick(series): void {
    console.log(series.brandCode);
    this.usedCarSearchParams.vehicleBrand = series.brandCode;
    this.selectedBrandCode = series.brandCode;
    this.usedCarSearchParams.vehicleSeries = series.seriesCode;
    this.selectedSeriesCode = series.seriesCode;
    console.log(series.seriesCode);
    //发送搜索事件
    console.log('我是搜索组件我发送的搜索参数对象：' + JSON.stringify(this.usedCarSearchParams))
    this.productService.searchUsedCarEvent.emit(this.usedCarSearchParams);
    //console.log(series.brandName);
    this.selectedBrand = series.brandName;
    //console.log(this.selectedBrand)
    this.selectedSeries = series.seriesName;
    if (series.seriesName === '全部') {
      this.selectedSeries = null;
      this.usedCarSearchParams.vehicleBrand =  series.brandCode;
      this.usedCarSearchParams.vehicleSeries =  '-1';
      this.selectedSeriesCode = '-1';
      this.productService.searchUsedCarEvent.emit(this.usedCarSearchParams);
    }

    //并将此品牌下所选的车系名称置为激活状态
    this.seriesOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.seriesName === series.seriesName) {
          item.isActive = true;
        }
      }
    );
    //此处需要修改逻辑，点击全部车系时
    this.brandList.forEach(
      (item) => {
        item.forEach(
          i => {
            if (i.brandName === series.brandName ) {
              //品牌选项卡置为 激活 状态
              i.isActive = true;
              //显示品牌所在的选项卡
              this.tabD.forEach(
                (d) => {
                  if (d.key === i.initialD) {
                    d.isActive = true;
                    //跳转至品牌所在的选项卡
                    this.ngSwitch = i.sortNo;
                    //console.log(i.sortNo);
                    //将车系选项卡置为 此车系 所在的 品牌车系列表

                  } else {
                    d.isActive = false;
                  }
                }
              );
            } else {
              i.isActive = false;
            }
          }
        );
      }
    );
    this.initSeriesList.forEach(
      (item) => {
        //如果初始车系数组initSeriesList中的key 等于传入的 车系的 brand时，将vlaue赋值给 可选车系数组seriesList
        //series是seriesOptions
        if (item.seriesName === series.brandName) {
          this.seriesOptions = item.value;
        }
      }
    );

  }

  downPayClick(downPayOption): void {
    this.selectedLastDownPay = downPayOption;
    this.downPayOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.payMode === downPayOption.payMode) {
          item.isActive = true;
        }
      }
    );
    if (downPayOption.payMode === '全部') {
      this.selectedLastDownPay = null;
    }
  }

  vehPriceClick(vehPriceOption): void {
    this.selectedVehiclePrice = vehPriceOption;
    this.vehPriceOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.vehPrice === vehPriceOption.vehPrice) {
          item.isActive = true;
        }

      }
    );
    if (vehPriceOption.vehPrice === '全部') {
      this.selectedVehiclePrice = null;
    }
  }

  monthlyPaySelect(monthlyPayOption): void {
    this.selectedMonthlyPay = monthlyPayOption;
    //console.log(this.selectedMonthlyPay.minPay);
    this.monthlyPayOpen = !this.monthlyPayOpen;
    this.monthlyPayOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.monthlyPay === monthlyPayOption.monthlyPay) {
          item.isActive = true;
        }
      }
    );
    if (monthlyPayOption.monthlyPay === '全部') {
      this.selectedMonthlyPay = null;
    }

  }

  leaveMonthlyPayOptions(): void {
    setTimeout(
      () => {
        this.monthlyPayOpen = false;
      }, 300);

  }

  vehicleAgeSelect(vehicleAgeOption): void {
    this.selectedVehicleAge = vehicleAgeOption;
    //console.log(this.selectedVehicleAge);
    this.vehicleAgeOpen = !this.vehicleAgeOpen;
    this.vehicleAgeOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.vehicleAge === vehicleAgeOption.vehicleAge) {
          item.isActive = true;
        }
      }
    );
    if (vehicleAgeOption.vehicleAge === '全部') {
      this.selectedVehicleAge = null;
    }
  }
  //鼠标离开下拉框，0.3s后自动关闭
  leaveVehicleAgeOptions(): void {
    setTimeout(
      () => {
        this.vehicleAgeOpen = false;
      }, 300);
  }

  vehicleMileageSelect(vehicleMileageOption): void {
    this.selectedVehicleMileage = vehicleMileageOption;
    this.vehicleMileageOpen = ! this.vehicleMileageOpen;
    this.vehicleMileageOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.vehMileage === vehicleMileageOption.vehMileage) {
          item.isActive = true;
        }
      }
    );
    if (vehicleMileageOption.vehMileage === '全部') {
      this.selectedVehicleMileage = null;
    }
  }

  leaveVehicleMileageOptions(): void {
    setTimeout(
      () => {
        this.vehicleMileageOpen = false;
      }, 300);
  }

  vehicleTypeSelect(vehicleTypeOption): void {
    this.selectedVehicleType = vehicleTypeOption;
    this.vehicleTypeOpen = !this.vehicleTypeOpen;
    this.vehicleTypeOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.vehicleType === vehicleTypeOption.vehicleType) {
          item.isActive = true;
        }
      }
    );
    if (vehicleTypeOption.vehicleType === '全部') {
      this.selectedVehicleType = null;
    }

  }

  leaveVehicleTypeOptions(): void {
    setTimeout(
      () => {
        this.vehicleTypeOpen = false;
      }, 300);
  }

  vehicleColorSelect(vehicleColorOption): void {
    this.selectedVehicleColor = vehicleColorOption;
    this.vehicleColorOpen = !this.vehicleColorOpen;
    this.vehicleColorOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.vehicleColor === vehicleColorOption.vehicleColor) {
          item.isActive = true;
        }
      }
    );
    if (vehicleColorOption.vehicleColor === '全部') {
      this.selectedVehicleColor = null;
    }

  }

  leaveVehicleColorOptions(): void {
    setTimeout(
      () => {
        this.vehicleColorOpen = false;
      }, 500);
  }

  toogleMonthlyPay() {
    this.monthlyPayOpen = !this.monthlyPayOpen;
  }

  toogleVehicleAge() {
    this.vehicleAgeOpen = ! this.vehicleAgeOpen;
  }

  toogleVehicleMileage() {
    this.vehicleMileageOpen = !this.vehicleMileageOpen;
  }

  toogleVehicleType() {
    this.vehicleTypeOpen = !this.vehicleTypeOpen;
  }

  toogleVehicleColor() {
    this.vehicleColorOpen = ! this.vehicleColorOpen;
  }

  colseBrand() {
    this.usedCarSearchParams.vehicleBrand = '-1';
    console.log('我是搜索组件我发送的搜索参数对象：' + JSON.stringify(this.usedCarSearchParams))
    this.productService.searchUsedCarEvent.emit(this.usedCarSearchParams);
    this.selectedBrand = null;
    this.selectedSeries = null;
    this.ngSwitch = 0;
    this.tabD.forEach(
      (item) => {
        item.isActive = false;
        if (item.key === '全部') {
          item.isActive = true;
        }
      }
    );
    this.brandList.forEach(
      (item) => {
          item.forEach(
            (brandName) => {
              brandName.isActive = false;
            }
          );
      }
    );
    this.initSeriesList.forEach(
      (item) => {
        item.isActive = false;
        if (item.key === '全部') {
          this.seriesOptions = item.value;
        }
      }
    );
    this.seriesOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.key === '全部') {
          item.isActive = true;
        }
      }
    );
  }

  closeSeries() {
    this.usedCarSearchParams.vehicleSeries = '-1';
    console.log('我是搜索组件我发送的搜索参数对象：' + JSON.stringify(this.usedCarSearchParams))
    this.productService.searchUsedCarEvent.emit(this.usedCarSearchParams);
    this.initSeriesList.forEach(
      (item) => {
        item.isActive = false;
        if (item.key === '全部') {
          this.seriesOptions = item.value;
        }
      }
    );
    this.seriesOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.key === '全部') {
          item.isActive = true;
        }
      }
    );
    this.selectedSeries = null;
  }

  closeDownPay() {
    this.selectedLastDownPay = null;
    this.downPayOptions.forEach(
      (item) => {
        item.isActive = false;
        if ( item.payMode === '全部') {
          item.isActive = true;
        }
      }
    );
  }

  closeVehiclePrice() {
    this.selectedVehiclePrice = null;
    this.vehPriceOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.vehPrice === '全部') {
          item.isActive = true;
        }

      }
    );

  }

  closeMonthlyPay() {
    this.selectedMonthlyPay = null;
    this.monthlyPayOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.monthlyPay === '全部') {
          item.isActive = true;
        }
      }
    );
  }

  closeVehicleAge() {
    this.selectedVehicleAge = null;
    this.vehicleAgeOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.vehicleAge === '全部') {
          item.isActive = true;
        }
      }
    );
  }

  closeVehicleMileage() {
    this.selectedVehicleMileage = null;
    this.vehicleMileageOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.vehMileage === '全部') {
          item.isActive = true;
        }
      }
    );
  }

  closeVehicleType() {
    this.selectedVehicleType = null;
    this.vehicleTypeOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.vehicleType === '全部') {
          item.isActive = true;
        }
      }
    );
  }

  closeVehicleColor() {
    this.selectedVehicleColor = null;
    this.vehicleColorOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.vehicleColor === '全部') {
          item.isActive = true;
        }
      }
    );
  }

  resetSelected() {
    this.usedCarSearchParams.vehicleSeries = '-1';
    this.usedCarSearchParams.vehicleBrand = '-1';
    this.productService.searchUsedCarEvent.emit(this.usedCarSearchParams);
    this.ngSwitch = 0;
    this.selectedBrand = null;
    this.selectedSeries = null;
    this.selectedLastDownPay = null;
    this.selectedVehiclePrice = null;
    this.selectedMonthlyPay = null;
    this.selectedVehicleAge = null;
    this.selectedVehicleMileage = null;
    this.selectedVehicleType = null;
    this.selectedVehicleColor = null;
    this.tabD.forEach(
      (item) => {
        item.isActive = false;
        if (item.key === '全部') {
          item.isActive = true;
        }
      }
    );
    this.brandList.forEach(
      (item) => {
        item.forEach(
          (brandName) => {
            brandName.isActive = false;
          }
        );
      }
    );
    this.initSeriesList.forEach(
      (item) => {
        item.isActive = false;
        if (item.key === '全部') {
          this.seriesOptions = item.value;
        }
      }
    );
    this.seriesOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.key === '全部') {
          item.isActive = true;
        }
      }
    );
    this.downPayOptions.forEach(
      (item) => {
        item.isActive = false;
        if ( item.payMode === '全部') {
          item.isActive = true;
        }
      }
    );
    this.vehPriceOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.vehPrice === '全部') {
          item.isActive = true;
        }

      }
    );
    this.monthlyPayOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.monthlyPay === '全部') {
          item.isActive = true;
        }
      }
    );
    this.vehicleAgeOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.vehicleAge === '全部') {
          item.isActive = true;
        }
      }
    );
    this.vehicleMileageOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.vehMileage === '全部') {
          item.isActive = true;
        }
      }
    );
    this.vehicleTypeOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.vehicleType === '全部') {
          item.isActive = true;
        }
      }
    );
    this.vehicleColorOptions.forEach(
      (item) => {
        item.isActive = false;
        if (item.vehicleColor === '全部') {
          item.isActive = true;
        }
      }
    );
  }
}

