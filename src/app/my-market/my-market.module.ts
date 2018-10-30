import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { MyMarketComponent } from './my-market.component';
import {myMarketRooutes} from './my-market.router';
import { CarouselModule } from 'ngx-bootstrap';
import { ContentComponent } from './content/content.component';
import {ContactUsComponent} from "./contact-us/contact-us.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { BusinessItemComponent } from './business-item/business-item.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

@NgModule({
  declarations: [
    MyMarketComponent,
    ContentComponent,
    ContactUsComponent,
    PhotoListComponent,
    BusinessItemComponent,
    CarouselItemComponent


  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule.forChild(myMarketRooutes)
  ],
  providers: [

  ],
})
export class MyMarketModule { }
