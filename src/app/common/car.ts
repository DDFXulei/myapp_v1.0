export interface NewCar {
  initLetter: string;
  brandName: string;
  seriesName: string;
  firstPay: number;
  monthlyPay: number;
  fullPrice: number;
  modelName: string;
}

export interface  Market {
  title: string;
  secondTitle: string;
  content: string;
  imgSrc: string;
  dataSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
}
export interface BussinessItem {
  imgSrc: string;
  title: string;
  secondTitle: string;
  routeInfo: string;
  btnName: string;

}
export interface Carousel {
  imgSrc: string;
  dataSrc: string;
  imgAlt: string;
}

export interface OtherSelectItem {
  selTitle: string;
  options: [{selKey: string, selValue: number}];

}
