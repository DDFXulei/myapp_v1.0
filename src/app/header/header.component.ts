import {Component, EventEmitter, OnInit, Output, AfterContentInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentInit {

  @Output()
  navChange = new EventEmitter();
  linkValues = [];
  public curRoutePath: string = 'home';
  constructor(
    public router: Router,
    public ar: ActivatedRoute,
  ) {
      //console.log('路由信息：' + this.location);
    //console.log('打印路由信息：' + this.ar.url.pipe());

    this.linkValues = [
      {
        aname: '首页',
        routeUrl: 'home',
      },
      {
        aname: '新车',
        routeUrl: 'newcar',
      },
      {
        aname: '二手车',
        routeUrl: 'usedcar',
      },
      {
        aname: '汽车金融',
        routeUrl: 'carfinance',
      },
      {
        aname: '联系我们',
        routeUrl: 'contactus',
      },
      {
        aname: '年度预算',
        routeUrl: 'budget',
      },
    ];

  }

  ngOnInit() {
    console.log(this.router.url);

  }

  ngAfterContentInit(): void {
  }

  navClick(path: string) {
    //console.log('当前路径是:' + path);
    this.curRoutePath = path || 'home';
    //console.log(path);
    this.navChange.emit(path.substr(1));
    this.router.navigateByUrl(path);
  }


}
