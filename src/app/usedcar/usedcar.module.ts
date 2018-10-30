import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {UsedcarComponent} from "./usedcar.component";
import {usedcarRooutes} from './usedcar.router';
import { CarouselModule } from 'ngx-bootstrap';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    UsedcarComponent,
    HeaderSearchComponent,
    ListContainerComponent,
    ProductDetailComponent

  ],
  imports: [
    HttpClientModule,
    CommonModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(usedcarRooutes)
  ],
  providers: [

  ],
})
export class UsedcarModule { }
