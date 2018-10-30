import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
//import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
//import { MyTableComponent } from './my-table/my-table.component';
import {RouterModule} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import {appRooutes} from "./app.router";
import { LoginComponent } from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {RightNavComponent} from "./shared/right-nav/right-nav.component";
import {FooterComponent} from "./footer/footer.component";
import { MySelectComponent } from './shared/my-select/my-select.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RightNavComponent,
    FooterComponent,
    MySelectComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(appRooutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
