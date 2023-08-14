import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from 'src/app/shared/shared.module';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatoApellidoPipe } from './pipes/apellidos'
import { AlumnosService } from './alumnos.service';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [authGuard] }

];

@NgModule({
  declarations: [
    HomeComponent,
    FormatoApellidoPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports:[
    HomeComponent,
  ],
  providers: [AlumnosService],
})
export class HomeModule { }
