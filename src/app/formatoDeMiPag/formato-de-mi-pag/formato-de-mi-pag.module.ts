import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeModule } from '../pages/home/home.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    HomeModule,
    MatIconModule,
    RouterModule,
  ]
})
export class FormatoDeMiPagModule { }
