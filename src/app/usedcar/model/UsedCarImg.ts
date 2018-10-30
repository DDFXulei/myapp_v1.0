export class UsedCarImg {
    private _indexImg: string;
    private _sideImg: string;
    private _dashBoardImg: string;
    private _middleControlImg: string;
    private _forntSeatImg: string;
    private _backSeatImg: string;
    private _straightTrailImg: string;
    private _engineImg: string;
    private _angleImg: string;
    private _speedLiftImg: boolean;
    private _fivePercentImg: boolean;
    private _approachNewImg: boolean;

    constructor(indexImg: string, sideImg: string, dashBoardImg: string, middleControlImg: string, forntSeatImg: string, backSeatImg: string, straightTrailImg: string, engineImg: string, angleImg: string, speedLiftImg: boolean, fivePercentImg: boolean, approachNewImg: boolean) {
    this._indexImg = indexImg;
    this._sideImg = sideImg;
    this._dashBoardImg = dashBoardImg;
    this._middleControlImg = middleControlImg;
    this._forntSeatImg = forntSeatImg;
    this._backSeatImg = backSeatImg;
    this._straightTrailImg = straightTrailImg;
    this._engineImg = engineImg;
    this._angleImg = angleImg;
    this._speedLiftImg = speedLiftImg;
    this._fivePercentImg = fivePercentImg;
    this._approachNewImg = approachNewImg;
  }


  get indexImg(): string {
    return this._indexImg;
  }

  set indexImg(value: string) {
    this._indexImg = value;
  }

  get sideImg(): string {
    return this._sideImg;
  }

  set sideImg(value: string) {
    this._sideImg = value;
  }

  get dashBoardImg(): string {
    return this._dashBoardImg;
  }

  set dashBoardImg(value: string) {
    this._dashBoardImg = value;
  }

  get middleControlImg(): string {
    return this._middleControlImg;
  }

  set middleControlImg(value: string) {
    this._middleControlImg = value;
  }

  get forntSeatImg(): string {
    return this._forntSeatImg;
  }

  set forntSeatImg(value: string) {
    this._forntSeatImg = value;
  }

  get backSeatImg(): string {
    return this._backSeatImg;
  }

  set backSeatImg(value: string) {
    this._backSeatImg = value;
  }

  get straightTrailImg(): string {
    return this._straightTrailImg;
  }

  set straightTrailImg(value: string) {
    this._straightTrailImg = value;
  }

  get engineImg(): string {
    return this._engineImg;
  }

  set engineImg(value: string) {
    this._engineImg = value;
  }

  get angleImg(): string {
    return this._angleImg;
  }

  set angleImg(value: string) {
    this._angleImg = value;
  }

  get speedLiftImg(): boolean {
    return this._speedLiftImg;
  }

  set speedLiftImg(value: boolean) {
    this._speedLiftImg = value;
  }

  get fivePercentImg(): boolean {
    return this._fivePercentImg;
  }

  set fivePercentImg(value: boolean) {
    this._fivePercentImg = value;
  }

  get approachNewImg(): boolean {
    return this._approachNewImg;
  }

  set approachNewImg(value: boolean) {
    this._approachNewImg = value;
  }
}
