export class DownPay {
 public payMode: string;
 public minValue: number;
 public maxValue: number;
 public isActive: boolean;

  constructor(payMode: string, minValue: number, maxValue: number, isActive: boolean) {
    this.payMode = payMode;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.isActive = isActive;
  }

}

export class VehiclePrice {
  public vehPrice: string;
  public  minValue: number;
  public  maxValue: number;
  public  isActive: boolean;

  constructor(vehPrice: string, minValue: number, maxValue: number, isActive: boolean) {
    this.vehPrice = vehPrice;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.isActive = isActive;
  }
}
export class MonthlyPay {
  public monthlyPay: string;
  public minPay: number;
  public maxPay: number;
  public isActive: boolean;

  constructor(monthlyPay: string, minPay: number, maxPay: number, isActive: boolean) {
    this.monthlyPay = monthlyPay;
    this.minPay = minPay;
    this.maxPay = maxPay;
    this.isActive = isActive;
  }
}
export class VehicleAge {
  public vehicleAge: string;
  public  minAge: number;
  public  maxAge: number;
  public isActive: boolean;

  constructor(vehicleAge: string, minAge: number, maxAge: number, isActive: boolean) {
    this.vehicleAge = vehicleAge;
    this.minAge = minAge;
    this.maxAge = maxAge;
    this.isActive = isActive;
  }
}
export class VehicleMileage {
  public vehMileage: string;
  public  minMileage: number;
  public maxMileage: number;
  public isActive: boolean;

  constructor(vehMileage: string, minMileage: number, maxMileage: number, isActive: boolean) {
    this.vehMileage = vehMileage;
    this.minMileage = minMileage;
    this.maxMileage = maxMileage;
    this.isActive = isActive;
  }
}

export class VehicleType {
  public vehicleType: string;
  public vehicleCode: number;
  public isActive: boolean;

  constructor(vehicleType: string, vehicleCode: number, isActive: boolean) {
    this.vehicleType = vehicleType;
    this.vehicleCode = vehicleCode;
    this.isActive = isActive;
  }
}

export class VehicleColor {
  public vehicleColor: string;
  public colorCode: string;
  public colorImg: string;
  public  isActive: boolean;

  constructor(vehicleColor: string, colorCode: string, colorImg: string, isActive: boolean) {
    this.vehicleColor = vehicleColor;
    this.colorCode = colorCode;
    this.colorImg = colorImg;
    this.isActive = isActive;
  }
}

// export class UsedCarSearchParams {
//   vehicleBrand: string;
//   vehicleSeries: string;
//   downPay: number;
//   vehiclePrice: {minPrice: number, maxPrcie: number};
//   monthlyPay: {minPay: number, maxPay: number};
//   vehicleAge: {minAge: number, maxAge: number};
//   vehicleMileage: {minAge: number, maxAge: number};
//   vehicleType: string;
//   vehicleColor: string;
//
//  constructor(vehicleBrand: string, vehicleSeries: string, downPay: number, vehiclePrice: { minPrice: number; maxPrcie: number }, monthlyPay: { minPay: number; maxPay: number }, vehicleAge: { minAge: number; maxAge: number }, vehicleMileage: { minAge: number; maxAge: number }, vehicleType: string, vehicleColor: string) {
//     this.vehicleBrand = vehicleBrand;
//     this.vehicleSeries = vehicleSeries;
//     this.downPay = downPay;
//     this.vehiclePrice = vehiclePrice;
//     this.monthlyPay = monthlyPay;
//     this.vehicleAge = vehicleAge;
//     this.vehicleMileage = vehicleMileage;
//     this.vehicleType = vehicleType;
//     this.vehicleColor = vehicleColor;
//   }
// }

export class UsedCarSearchParams {
  vehicleBrand: string;
  vehicleSeries: string;
  sortBy: string;
  sortMode: string;


  constructor(vehicleBrand: string, vehicleSeries: string, sortBy: string, sortMode: string) {
    this.vehicleBrand = vehicleBrand;
    this.vehicleSeries = vehicleSeries;
    this.sortBy = sortBy;
    this.sortMode = sortMode;
  }
}
