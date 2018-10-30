import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.css']
})
export class RightNavComponent implements OnInit {
  hideIf: boolean = true;
  ngSwitch: number;
  appisActive: boolean = false;
  wxisActive: boolean = false;
  phoneisActive:boolean = false;
  constructor() { }

  ngOnInit() {
    // let topbtn = document.getElementById("btn");
    // let timer = null;  //获取屏幕的高度
    // let pagelookheight = document.documentElement.clientHeight;
    // let backtop = document.body.scrollTop;
    // if (backtop >= pagelookheight) {
    //   this.hideIf = true;
    // }else{
    //   this.hideIf = false;
    // }
  }
  toTop() {
      let timer = setInterval(() => {
        let backtop = document.body.scrollTop;              //速度操作  减速
        let speedtop = backtop / 5;
      document.body.scrollTop = backtop - speedtop;  //高度不断减少
      if ( backtop === 0 ) {  //滑动到顶端
        clearInterval(timer);  //清除计时器
      }
    }, 30);
  }
}
