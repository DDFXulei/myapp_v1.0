import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators";
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  ws: WebSocket;

  constructor() {
  }

  createObservable(url: string , productCode: string): Observable<any> {
    //对象根据url，去连接到指定的服务器
    this.ws = new WebSocket(url);

    return new Observable<string>(
      observer => {
        this.ws.onmessage = (event) => observer.next(event.data);
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose = (event) => observer.complete();
        //连接到服务器时，发送商品的代码
        this.ws.onopen = (event) => this.sendMessage({productCode: productCode});
        // return () => {
        //   this.ws.close();
        // }  //当客户端取消订阅这个流时，将websocket关闭，否则在客户端反复订阅取消订阅流时，造成内存泄漏
      }
    ).pipe(
      map(
        message => {
          JSON.stringify(message);
        }
      )
    );
    //   .pipe(
    //
    //     // message => {
    //     //   JSON.stringify(message)
    //     // }
    //
    // );

  }
  sendMessage(message: any) {
    this.ws.send(JSON.stringify(message));
  }
}

class WatchProduct {
  productCode: string;

  constructor(productCode: string) {
    this.productCode = productCode;
  }
}
