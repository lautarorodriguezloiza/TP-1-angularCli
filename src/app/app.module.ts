import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './modules/user-info/user-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormatoDeMiPagComponent } from './formatoDeMiPag/formato-de-mi-pag/formato-de-mi-pag.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeModule } from './formatoDeMiPag/pages/home/home.module';





@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    FormatoDeMiPagComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule ,
    MatToolbarModule,
    MatButtonModule,
    HomeModule,
  ],
  
  bootstrap: [AppComponent],
})
export class AppModule { }
