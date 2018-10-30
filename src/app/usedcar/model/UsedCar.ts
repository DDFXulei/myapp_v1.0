import {Car} from "../../common/CarModel";

export class UsedCar implements Car {
  private _indexImg: string;
  private _productCode: string;
  private _productName: string;
  private _brandName: string;
  private _seriesName: string;
  private _modelName: string;
  private _directivePrice: number;
  private _lastDownPay: number;
  private _oldDownPay: number;
  private _enterDate: number;
  private _exeuntDate: number;
  private _monthlyPayment: number;
  private _emissionStandard: string;
  private _gearBox: string;
  private _exhaust: string;
  private _vehicleType: string;
  private _fuelSystem: string;
  private _approvePassenger: string;
  private _vehicleLocation: string;
  private _dashMilieage: number;
  private _firstRegister: number;
  private _purchaseTax: number;
  private _directivePriceTaxed: number;
  private _vehicleColor: string;


  constructor(indexImg: string, productCode: string, productName: string, brandName: string, seriesName: string, modelName: string, directivePrice: number, lastDownPay: number, oldDownPay: number, enterDate: number, exeuntDate: number, monthlyPayment: number, emissionStandard: string, gearBox: string, exhaust: string, vehicleType: string, fuelSystem: string, approvePassenger: string, vehicleLocation: string, dashMilieage: number, firstRegister: number, purchaseTax: number, directivePriceTaxed: number, vehicleColor: string) {
    this._indexImg = indexImg;
    this._productCode = productCode;
    this._productName = productName;
    this._brandName = brandName;
    this._seriesName = seriesName;
    this._modelName = modelName;
    this._directivePrice = directivePrice;
    this._lastDownPay = lastDownPay;
    this._oldDownPay = oldDownPay;
    this._enterDate = enterDate;
    this._exeuntDate = exeuntDate;
    this._monthlyPayment = monthlyPayment;
    this._emissionStandard = emissionStandard;
    this._gearBox = gearBox;
    this._exhaust = exhaust;
    this._vehicleType = vehicleType;
    this._fuelSystem = fuelSystem;
    this._approvePassenger = approvePassenger;
    this._vehicleLocation = vehicleLocation;
    this._dashMilieage = dashMilieage;
    this._firstRegister = firstRegister;
    this._purchaseTax = purchaseTax;
    this._directivePriceTaxed = directivePriceTaxed;
    this._vehicleColor = vehicleColor;
  }

  get indexImg(): string {
    return this._indexImg;
  }

  set indexImg(value: string) {
    this._indexImg = value;
  }

  get productCode(): string {
    return this._productCode;
  }

  set productCode(value: string) {
    this._productCode = value;
  }

  get productName(): string {
    return this._productName;
  }

  set productName(value: string) {
    this._productName = value;
  }

  get brandName(): string {
    return this._brandName;
  }

  set brandName(value: string) {
    this._brandName = value;
  }

  get seriesName(): string {
    return this._seriesName;
  }

  set seriesName(value: string) {
    this._seriesName = value;
  }

  get modelName(): string {
    return this._modelName;
  }

  set modelName(value: string) {
    this._modelName = value;
  }

  get directivePrice(): number {
    return this._directivePrice;
  }

  set directivePrice(value: number) {
    this._directivePrice = value;
  }

  get lastDownPay(): number {
    return this._lastDownPay;
  }

  set lastDownPay(value: number) {
    this._lastDownPay = value;
  }

  get oldDownPay(): number {
    return this._oldDownPay;
  }

  set oldDownPay(value: number) {
    this._oldDownPay = value;
  }

  get enterDate(): number {
    return this._enterDate;
  }

  set enterDate(value: number) {
    this._enterDate = value;
  }

  get exeuntDate(): number {
    return this._exeuntDate;
  }

  set exeuntDate(value: number) {
    this._exeuntDate = value;
  }

  get monthlyPayment(): number {
    return this._monthlyPayment;
  }

  set monthlyPayment(value: number) {
    this._monthlyPayment = value;
  }

  get emissionStandard(): string {
    return this._emissionStandard;
  }

  set emissionStandard(value: string) {
    this._emissionStandard = value;
  }

  get gearBox(): string {
    return this._gearBox;
  }

  set gearBox(value: string) {
    this._gearBox = value;
  }

  get exhaust(): string {
    return this._exhaust;
  }

  set exhaust(value: string) {
    this._exhaust = value;
  }

  get vehicleType(): string {
    return this._vehicleType;
  }

  set vehicleType(value: string) {
    this._vehicleType = value;
  }

  get fuelSystem(): string {
    return this._fuelSystem;
  }

  set fuelSystem(value: string) {
    this._fuelSystem = value;
  }

  get approvePassenger(): string {
    return this._approvePassenger;
  }

  set approvePassenger(value: string) {
    this._approvePassenger = value;
  }

  get vehicleLocation(): string {
    return this._vehicleLocation;
  }

  set vehicleLocation(value: string) {
    this._vehicleLocation = value;
  }

  get dashMilieage(): number {
    return this._dashMilieage;
  }

  set dashMilieage(value: number) {
    this._dashMilieage = value;
  }

  get firstRegister(): number {
    return this._firstRegister;
  }

  set firstRegister(value: number) {
    this._firstRegister = value;
  }

  get purchaseTax(): number {
    return this._purchaseTax;
  }

  set purchaseTax(value: number) {
    this._purchaseTax = value;
  }

  get directivePriceTaxed(): number {
    return this._directivePriceTaxed;
  }

  set directivePriceTaxed(value: number) {
    this._directivePriceTaxed = value;
  }

  get vehicleColor(): string {
    return this._vehicleColor;
  }

  set vehicleColor(value: string) {
    this._vehicleColor = value;
  }
}

export class TailMoney {
  public productCode: string;
  public moneyTotal: number;
  public monthQty: number;
  public perMonthPay: number;


  constructor(productCode: string, moneyTotal: number, monthQty: number, perMonthPay: number) {
    this.productCode = productCode;
    this.moneyTotal = moneyTotal;
    this.monthQty = monthQty;
    this.perMonthPay = perMonthPay;
  }
}

export class SortUsedCar {
  public key: string;
  public name: string;
  public isActived: boolean;
  public hasScrow: boolean;
  public clickActive: boolean;
  public isDown: boolean;


  constructor(key: string, name: string, isActived: boolean, hasScrow: boolean, clickActive: boolean, isDown: boolean) {
    this.key = key;
    this.name = name;
    this.isActived = isActived;
    this.hasScrow = hasScrow;
    this.clickActive = clickActive;
    this.isDown = isDown;
  }
}
