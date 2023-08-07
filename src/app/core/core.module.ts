import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../formatoDeMiPag/auth/auth.module';


@NgModule({
  declarations: [],
  providers: [AuthModule],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
